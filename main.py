# -*-coding:utf-8-*-
from login import Login
from send_gmail import send_gmail
import time, json


def readConfig():
    try:
        with open('./config.json', 'r') as fp:
            config = json.load(fp)
            return config
    except Exception as e:
        print(e)


if __name__ == '__main__':
    rc = 0
    config = readConfig()
    print(config)
    for t in range(10):
        rc, msg = Login(config['dbId'], config['dbPassword'], config['openKey'], config['unionId'])
        if rc == 0:
            send_gmail("【每日健康打卡】打卡成功通知", "今日打卡任务已完成")
            print("打卡成功!")
            break
        elif rc == -1 and msg == '今日已打卡':
            send_gmail("【每日健康打卡】结果通知", "今日已打卡")
            print("打过了！")
            break
        else:
            time.sleep(5)

    if rc != 0 and msg != '今日已打卡':
        send_gmail("【每日健康打卡】错误提醒", "Token错误")
