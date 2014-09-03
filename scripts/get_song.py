#!/usr/bin/env python
#-*- coding: utf-8 -*-
#also it may be all data, but we needs only current track

__author__ = "Danila Truep"
__email__ = "webmaster@truep.ru"
__status__ = "Testing"

import requests
from pyquery import PyQuery as pq

def application(environ, start_response):
    SERVER = "http://radiopixta.zapto.org"
    PORT = "8000"
    PAGE = "/status.xsl"
    url = SERVER+":"+PORT+PAGE
    start_response('200 OK', [('Content-Type','text/html')])
    URL = requests.get(url)
    DATA = pq(URL.content)
    CURRENT_SONG = DATA('td.streamdata')[9].text
    return CURRENT_SONG
