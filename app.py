from flask import Flask
from flask import (request, session, render_template, abort, jsonify)
from flask import render_template 
import requests
import json 
import sqlite3
from flask import g

DATABASE = 'api-explorer.db'
#path = 'sprinterns2022/api-explorer.db'
#conn = sqlite3.connect(DATABASE)
#cursor = conn.cursor()

app = Flask(__name__)
app.secret_key = "secret"

#DATABASE = 'api-explorer.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = dict_factory
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return rv

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@app.route("/", methods = ['GET'])
def hello():
    hi = "hello world. Winterns are the best."
    return render_template('app.html', text=hi)


@app.route("/getComments", methods = ['GET'])
def all_comments_queries():

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    result = cursor.execute('''SELECT * FROM comments_table ''')
    data = cursor.fetchall()
    conn.close()
    return json.dumps(data)

        
@app.route('/api', methods=['GET', 'POST', 'PATCH', 'DELETE'])   #relates to Form.jsx line 49
def quote():
    
    auth_token = request.json['authToken'] 
    endpoint = request.json['apiEndpoint']
    params = request.json['params']
    Method= request.json['Method']

    if Method=='GET':
        if params:
            response = requests.get('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token}, json=params)
        else:
            response = requests.get('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
          
    elif Method=='POST': 
        if params:
            response = requests.post('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token}, json=params)
        else:
            response = requests.post('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    elif Method=='PATCH': 
        if params:
            response = requests.patch('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token}, json=params)
        else:
            response = requests.patch('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    elif Method=='DELETE': 
        if params:
            response = requests.delete('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token}, json=params)
        else:
            response = requests.delete('https://api-ssl.bitly.com/v4' + endpoint, headers={"Authorization": "Bearer " + auth_token})
    
    return (response.json())   



