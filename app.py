from flask import Flask, request, jsonify

app = Flask(__name__)

# Lista simplificada de senhas proibidas (exemplo)
COMMON_PASSWORDS = ["123456", "password", "qwerty", "admin"]

@app.route('/check-leak', methods=['POST'])
def check_leak():
    data = request.json
    pwd = data.get('password')
    
    if pwd in COMMON_PASSWORDS:
        return jsonify({"status": "Vulnerável", "message": "Esta senha é muito comum!"})
    
    return jsonify({"status": "Seguro", "message": "Nenhum vazamento detectado."})

if __name__ == '__main__':
    app.run(debug=True)