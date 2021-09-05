# -*-coding:utf-8-*-
import requests
import json
import time
from getToken import get_token

LOGIN_URL = 'https://face-reg.ecnu.edu.cn/api/v3/login/ecnu'
REC_URL = 'https://anti-epidemic.ecnu.edu.cn/clock/mini/record'
QRY_URL = 'https://anti-epidemic.ecnu.edu.cn/clock/mini/user/v2/'
## 手动替换TOK_URL
TOK_URL = 'https://anti-epidemic.ecnu.edu.cn/clock/mini/wx/new?open_key='
UA = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat'
MiniToken = ''
headers = {
    'Connection': 'keep-alive',
    'User-Agent': UA,
    'MiniToken': MiniToken,
    'content-type': 'application/json',
    'Referer': 'https://servicewechat.com/wxfcaebbc17bdc154b/27/page-frame.html',
    'Accept-Encoding': 'gzip, deflate, br'
}

s = requests.session()


def Login(username, password, openkey, unionId):
    regData = {
        'number': username,
        'password': password,
        "unionId": unionId
    }
    r = s.post(LOGIN_URL, data=json.dumps(regData), headers=headers)
    j = json.loads(r.content)
    # print(j)
    portname = j['result']['name']
    r = s.get(TOK_URL + openkey, headers=headers)
    j = json.loads(r.content)
    # print(j)
    headers['MiniToken'] = j['message']
    postData = {
        'number': username,
        'location': '在学校',
        'health': '健康，未超过37.3',
        'recordTime': int(round(time.time() * 1000)),
        'token': get_token(portname, username)
    }
    print(postData)
    print(headers['MiniToken'])
    r = s.put(REC_URL, data=json.dumps(postData), headers=headers)
    js = json.loads(r.content)
    # print(js)
    r = s.get(QRY_URL + username, headers=headers)
    j = json.loads(r.content)
    print(j)
    return js['code'], js['message']
