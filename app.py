from flask import Flask, jsonify, render_template, request
import json

app = Flask(__name__)

# Architectural Models in Development
# MVC -> Model View Controller
# MongoDB | HTML | Flask
# REST -> HTTP Pattern | Status Codes | Request & Response Procedures | Verbs

# API Call - Frontend -> Backend Route to Load Data
# MVC Model -> Backend -> Loading Frontend w/Data

# View that displays a page
@app.route('/', methods=['GET'])
def homePage():
    # Connect to DB
    # LoadData
    data = "Faraz"
    return render_template('index.html', user_data=data)

# Api Endpoint
@app.route('/weather/week', methods=['GET'])
def getWeather():
    data = open('test.json',)
    data = json.load(data)
    return jsonify(data)

app.run(debug=True)
