from flask import Flask
from flask import (request, session, render_template, abort, jsonify)
from flask import render_template 
import requests
import json 

app = Flask(__name__)
app.secret_key = "secret"
 
@app.route("/", methods = ['GET'])
def hello():
    hi = "Hello Winterns Test. Katya."
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



