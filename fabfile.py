#!/usr/bin/env python
# -*- coding: utf-8 -*-

__author__ = 'Huang_Qian'

import sys

'''
Deployment toolkit.
'''
import os
import re
from datetime import datetime
from fabric2 import Connection
from fabric2 import task

con = Connection(host='47.108.226.109', user='root', connect_kwargs={'password': '000000'})
db_user = 'www-data'
db_password = 'www-data'

_TAR_FILE = 'dist-awesome.tar'
_GZ_FILE = 'dist-awesome.tar.gz'


@task
def build(c):
    """
       packing the awesome app
       """
    if _TAR_FILE in os.listdir('./dist'):
        con.local(r'del dist\%s' % _TAR_FILE)
    if _GZ_FILE in os.listdir('./dist'):
        con.local(r"del dist\%s" % _GZ_FILE)
    with con.cd(os.path.join(os.path.abspath('.'), 'www')):
        con.local('dir')
        tarcmd = ['7z', 'a', '../dist/%s' % _TAR_FILE, '*', ' -r', '-xr!__pycache__/']
        con.local(' '.join(tarcmd))
        gzcmd = ['7z', 'a', '../dist/%s' % _GZ_FILE, '../dist/%s' % _TAR_FILE]
        con.local(' '.join(gzcmd))


_REMOTE_TMP_TAR = '/tmp/%s' % _GZ_FILE
_REMOTE_BASE_DIR = '/srv/awesome'


@task()
def mysqlschema(c):
    """
    put schema.sql to rs
    """
    con.put(r"E:\WebApp\awesome-webapp\www\resource\schema.sql", '/tmp')
    con.run('echo all right')

@task
def deploy(c):
    """
    deploy awesome app
    """
    newdir = 'www-%s' % datetime.now().strftime('%y-%m-%d_%H.%M.%S')
    con.sudo('rm -f %s' % _REMOTE_TMP_TAR)
    con.put('dist/%s' % _GZ_FILE, _REMOTE_TMP_TAR)
    con.run('pwd')
    # with con.cd('/srv'):
    #     con.run('pwd')
    with con.cd(_REMOTE_BASE_DIR):
        con.run('pwd')
        con.run('mkdir %s' % newdir)

    with con.cd('%s/%s' % (_REMOTE_BASE_DIR, newdir)):
        con.run('pwd')
        con.run('tar -xzvf %s' % _REMOTE_TMP_TAR)

    with con.cd(_REMOTE_BASE_DIR):
        con.run('rm -rf www')
        con.run('ln -s %s www' % newdir)
        con.run('chown www-data:www-data www')
        con.run('chown -R www-data:www-data %s' % newdir)
        con.run('echo  all right!')
    # con.sudo('supervisorctl update', warn=True)
    con.sudo('supervisorctl stop awesome', warn=True)
    con.sudo('supervisorctl start awesome', warn=True)
    con.sudo('/etc/init.d/nginx reload', warn=True)
