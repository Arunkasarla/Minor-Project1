from flask import Flask, jsonify
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    # 🔴 IMPORT HERE (INSIDE FUNCTION)
    from routes.auth import auth_bp

    # 🔴 REGISTER HERE
    app.register_blueprint(auth_bp)

    @app.route("/")
    def home():
        return jsonify({"message": "Backend running"})

    @app.route("/routes-check")
    def routes_check():
        return jsonify({
            "routes": [str(rule) for rule in app.url_map.iter_rules()]
        })

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
