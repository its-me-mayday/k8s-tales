from flask import Flask
app = Flask(__name__)
@app.route('/asia')
def home():
    return "Hello from Asia! 🐍"
