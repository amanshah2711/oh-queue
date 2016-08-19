from gevent import monkey
monkey.patch_all()

import logging
logging.basicConfig(level=logging.INFO)


# Flask-related stuff
from flask import Flask
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy


# Initialize the application
app = Flask(__name__)
app.config.from_object('config')
app.config.update({
    'DEBUG': True,
    'SQLALCHEMY_TRACK_MODIFICATIONS': False,
})

db = SQLAlchemy(app)
socketio = SocketIO(app)


# Import views
import oh_queue.views

# Import routes
import oh_queue.routes
