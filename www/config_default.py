#!/usr/bin/env python3
# -*- coding: utf-8 -*-

__author__ = 'HuangQian'


"""
Default configurations.
"""

configs = {
    'debug': True,
    'db': {
        'host': 'localhost',
        'port': 3306,
        'user': 'www-data',
        'password': 'www-data',
        'db': 'awesome'
    },
    'session': {
        'secret': 'Awesome'
    }
}
