import os
from flask import Flask, request, jsonify

# Determine base directory and frontend directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, '..', 'frontend')

app = Flask(__name__, static_folder=FRONTEND_DIR, static_url_path='')
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'uploads')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def index():
    # Serve the landing page
    return app.send_static_file('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files.get('file')
    if not file:
        return 'No file uploaded', 400
    # Save the uploaded file in the uploads folder
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)
    # TODO: Process the XLSX file and store results for statistics
    return '', 200

@app.route('/stats')
def get_stats():
    # TODO: Compute real statistics based on the uploaded data
    return jsonify({'message': 'Statistiques non impl\u00e9ment\u00e9es.'})

@app.route('/<path:path>')
def static_proxy(path):
    # Serve other static files (CSS, JS, HTML)
    return app.send_static_file(path)

if __name__ == '__main__':
    app.run(debug=True)
