# -*-coding:utf-8-*-
import execjs
import os


def get_token(port_name, port_number):
    os.chdir(os.path.dirname(__file__))
    with open('md5.js', 'r') as f:
        t = f.read()
    desJS = execjs.compile(t)
    return desJS.call('md5', port_name + port_number + 'ecnu1024')
