from flask import Flask,request,render_template,redirect
from cs50 import SQL
app = Flask(__name__)

#实现界面
@app.route("/")
def index():
    return render_template("index.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/note")
def note():
    return render_template("note.html")
