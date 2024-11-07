from flask import Flask,request
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
db_config = {
    'host' : 'localhost',
    'database' : 'codegnan',
    'user' : 'root',
    'password' : 'root'
}

@app.route("/storedata",methods= ["POST"])
def storedata():
    data = request.json
    fname = data.get('fullname')
    mail = data.get('email')
    mobile = data.get('phone')
    utype = data.get('userType')
    avail = data.get('availability')
    course = data.get('course')
    
    conn = pymysql.connect(**db_config)
    cursor = conn.cursor()
    q1 = "INSERT INTO FORMDATA VALUES (%s,%s,%s,%s,%s,%s)"
    cursor.execute(q1,(fname,mail,mobile,utype,avail,course))
    conn.commit()

    return "Data Recieved"
if __name__ == "__main__":
    app.run(debug=True)