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
        db = g._database = sqlite3.connect(DATABASE, isolation_level = None)
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

    query = '''SELECT * FROM comments_table '''
    data = query_db(query)
    
    return json.dumps(data)

@app.route("/savedetails", methods = ['POST'])
def new_comment_query():    

    first_name = request.json["f_name"]  
    last_name = request.json["l_name"]  
    email = request.json["email"] 
    subject = request.json["subject"] 
    comment = request.json["comment"] 

    query = '''INSERT INTO comments_table (first_name, last_name, email, subject, comment) VALUES (?,?,?,?,?) ''' 
    arg = (first_name, last_name, email, subject, comment)
    query_db(query,arg)

    return jsonify(statusCode = 201)


@app.route("/<comment_id>/delete", methods = ['DELETE'])
def delete_comment_query(comment_id): 

    query = ''' DELETE FROM comments_table WHERE comment_id = ?'''
    arg = (comment_id)
    query_db(query,arg)

    return (statusCode = 204) 


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



