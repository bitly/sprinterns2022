from flask import Flask
from flask import (request, session, render_template, abort, jsonify)
from flask import render_template 
import requests
import json 
import sqlite3
from flask import g

DATABASE = 'api-explorer.db'

app = Flask(__name__)
app.secret_key = "secret"


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

@app.route("/getComments", methods = ['GET'])
def all_comments_queries():
   conn = sqlite3.connect(DATABASE)
   cursor = conn.cursor()
   cursor.execute('''SELECT * FROM comments_table ''')
   data = cursor.fetchall()
   conn.close()
   return json.dumps(data)

   
@app.route("/comments", methods = ['POST'])
def new_comment_query():   
 
   first_name = request.json["f_name"] 
   last_name = request.json["l_name"] 
   email = request.json["email"]
   subject = request.json["subject"]
   comment = request.json["comment"]
 
   conn = sqlite3.connect(DATABASE, isolation_level = None)
   cursor = conn.cursor()
   cursor.execute('''INSERT INTO comments_table (first_name, last_name, email, subject, comment) VALUES (?,?,?,?,?) ''', (first_name, last_name, email, subject, comment) )
   cursor.close()
   conn.close()
 
   return "Comment Added"

@app.route("/", methods = ['GET'])
def hello():
    hi = "hello world. Winterns are the best."
    return render_template('app.html', text=hi)



@app.route('/api', methods=['GET', 'POST', 'PATCH', 'DELETE'])
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

@app.route("/comments/<comment_id>", methods = ['DELETE'])
def delete_comment_query(comment_id):
 
   query = ''' DELETE FROM comments_table WHERE comment_id = ?'''
   arg = (comment_id)
   query_db(query,arg)
 
   return jsonify(statusCode = 204)
