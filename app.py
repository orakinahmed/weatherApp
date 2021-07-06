from flask import Flask, jsonify, render_template, request
import json, sys
import pymongo

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
    # Connect to DB Server
    client = pymongo.MongoClient("mongodb+srv://rakin:test#123@cluster0.7zpya.mongodb.net/weatherApp?retryWrites=true&w=majority")
    # Connect to DB
    db = client['weatherApp']
    # Connect to the Collection we want
    collection = db['weekData']
    # Load Data
    data = collection.find_one()
    print(data, file=sys.stderr)
    # pass in one item from data into the page
    day = data["week"][0]['day']

    # Inserting Data into DB
    #mydict = { "name": "Faraz", "address": "123 Chicken Lane" }
    #collection.insert_one(mydict)

    # Example of Passing Data into Frontend using Flask
    return render_template('index.html', user_data=data)

# Api Endpoint
@app.route('/weather/week', methods=['GET'])
def getWeather():
    data = open('test.json',)
    data = json.load(data)
    return jsonify(data)

app.run(debug=True)
