import os
import requests

from flask import Flask, jsonify, render_template, request, session, g, redirect, url_for

app = Flask(__name__)
# app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
# socketio = SocketIO(app)
app.secret_key = os.urandom(24)

# votes = {user: { channel: {time: message}
# users = {}

# message_text = []

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        session.pop("user", None)

        if request.form["password"] == 'password':
            session["user"] = request.form["username"]
            return redirect(url_for("index"))

    return render_template("index.html") # votes=votes

# @app.route("/<str:channel>", methods=["GET", "POST"])
# def channels():
#     return texts[0]

@app.route("/protected")
def protected():
    if g.user:
        return render_template("/index.html")
    return redirect(url_for("index"))


@app.before_request
def before_request():
    g.user = None
    if "user" in session:
        g.user = session["user"]


@app.route("/getsession")
def getsession():
    if 'user' in session:
        return session['user']
    return "Not logged in"


app.route("/dropsession")
def dropsession():
    session.pop("user", none)
    return "Dropped"


# app.login("login", methods=["GET", "POST"])
# def login():
#     username = request.form["username"]
#     password = request.form["password"]

# class Users(db.model):
#     __tablename__ = "users"
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String, nullable=False)
#     password = db.Column(db.String, nullable=False)
#     firstname = db.Column(db.String, nullable=False)
#     emailaddress = db.Column(db.String, nullable=False)

# class Messages(db.model):
#     __tablename__ = "messages"
#     id = db.Column(db.Integer, primary_key=True)
#     channel = db.Column(db.String, nullable=False)
#     message = db.Column(db.String, nullable=False)
#     user_id = db.Column(db.String, nullable=False)
#     published_time = db.Column(db.String, nullable=False)


# @socketio.on("submit vote")
# def vote(data):
#     selection = data["selection"]
#     votes[selection] += 1
#     emit("vote totals", votes, broadcast=True)

if __name__ == '__main__':
    app.run(debug=True)