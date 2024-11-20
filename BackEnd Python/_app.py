from flask import Flask, request, jsonify
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Database configuration
db_config = {
    'host': 'localhost',
    'database': 'codegnan',
    'user': 'root',
    'password': 'root'
}

@app.route("/studentdata", methods=["POST"])
def storedata():
    data = request.json

    # Extracting data from the request
    fname = data.get('name')
    mail = data.get('email')
    mobile = data.get('mobile')
    utype = data.get('userType')
    avail = data.get('availability')
    course = data.get('course')

    try:
        # Connecting to the database
        conn = pymysql.connect(
            host=db_config['host'],
            user=db_config['user'],
            password=db_config['password'],
            database=db_config['database'],
            cursorclass=pymysql.cursors.DictCursor
        )
        cursor = conn.cursor()

        # Insert query
        query = """
        INSERT INTO studentdata (fname, email, mobile, utype, avail, course) 
        VALUES (%s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (fname, mail, mobile, utype, avail, course))
        conn.commit()

        return jsonify({"message": "Data successfully stored", "status": "success"}), 201

    except pymysql.MySQLError as e:
        return jsonify({"error": str(e), "status": "failure"}), 500

    finally:
        if conn:
            cursor.close()
            conn.close()

if __name__ == "__main__":
    app.run(debug=True)


# 
# //============================================================================================================================
# 
# from flask import Flask,request
# import pymysql
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
# db_config = {
#     'host' : 'localhost',
#     'database' : 'codegnan',
#     'user' : 'root',
#     'password' : 'root'
# }

# @app.route("/studentdata",methods= ["POST"])
# def storedata():
#     data = request.json
#     fname = data.get('fullname')
#     mail = data.get('email')
#     mobile = data.get('phone')
#     utype = data.get('userType')
#     avail = data.get('availability')
#     course = data.get('course')
    
#     conn = pymysql.connect(**db_config)
#     cursor = conn.cursor()
#     q1 = "INSERT INTO FORMDATA VALUES (%s,%s,%s,%s,%s,%s)"
#     cursor.execute(q1,(fname,mail,mobile,utype,avail,course))
#     conn.commit()

#     return "Data Recieved"
# if __name__ == "__main__":
#     app.run(debug=True)

