from flask import Flask, render_template, request, jsonify
import os
import random

app = Flask(__name__)

users = {}

@app.route('/')
def login():
    return render_template('loginWithOTP.html')

@app.route('/index')
def home():
    return render_template('index.html')

@app.route('/displayMeghalaya')
def displayMeghalaya():
    return render_template('displayMeghalaya.html')

@app.route('/displayOdisha')
def displayOdisha():
    return render_template('displayOdisha.html')

@app.route('/displayPali')
def displayPali():
    return render_template('displayPali.html')

@app.route('/sendOtp', methods = ['POST'] )
def sendOtp():
    mobileNumber = request.json['mobileNumber']
    print("mobileNumber", mobileNumber)
    otp = generateOtp()
    print('OTP for ', mobileNumber, 'is ', otp)
    users[mobileNumber] = otp
    print(users[mobileNumber])
    return [otp, users[mobileNumber]]

@app.route('/verifyOtp', methods=['POST'])
def verifyOtp():
    mobileNumber = request.json['mobileNumber']
    otp = request.json['otp']

    if otp == users[mobileNumber]:
        return jsonify({'success' : True})
    else:
        return jsonify({'success': False})
def generateOtp():
    return str(random.randint(100000, 999999))

if __name__ == '__main__':
    app.run(debug=True)