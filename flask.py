from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample in-memory data (replace with actual database for production)
users = {
    "owner": {"password": "caughtlol1", "role": "owner"},
    "admin": {"password": "adminpassword", "role": "admin"},
    "user": {"password": "userpassword", "role": "normal"}
}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')

    user = users.get(username)
    if user and user['password'] == password and user['role'] == role:
        return jsonify({"status": "success", "role": user['role']})
    return jsonify({"status": "failure", "message": "Invalid credentials or role"}), 401

if __name__ == '__main__':
    app.run(debug=True)

