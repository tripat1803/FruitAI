from flask import Flask, request, jsonify, abort
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS  # Import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Configure MongoDB connection (replace with your MongoDB URI if needed)
client = MongoClient('mongodb+srv://sarthaksood09:VKP2eUnfR0HN2lzL@cluster0.sjhk127.mongodb.net/?retryWrites=true&w=majority')
db = client['faq_db']
faq_collection = db['faqs']

# Error handler for 404 errors (resource not found)
@app.errorhandler(404)
def resource_not_found(error):
    return jsonify({'error': 'Resource not found'}), 404

# Error handler for 400 errors (bad requests)
@app.errorhandler(400)
def bad_request(error):
    return jsonify({'error': 'Bad request'}), 400

# Fetch all FAQs
@app.route('/faqs', methods=['GET'])
def get_faqs():
    faqs = list(faq_collection.find())
    for faq in faqs:
        faq['_id'] = str(faq['_id'])
    return jsonify(faqs), 200

# Fetch a single FAQ by ID
@app.route('/faqs/<string:faq_id>', methods=['GET'])
def get_faq(faq_id):
    try:
        faq = faq_collection.find_one({'_id': ObjectId(faq_id)})
        if faq is None:
            abort(404)
        faq['_id'] = str(faq['_id'])
        return jsonify(faq), 200
    except Exception as e:
        abort(404)

# Create a new FAQ
@app.route('/faqs', methods=['POST'])
def create_faq():
    data = request.json
    if not data or 'title' not in data or 'description' not in data:
        abort(400)

    faq = {
        'title': data['title'],
        'description': data['description']
    }
    inserted_faq = faq_collection.insert_one(faq)
    faq['_id'] = str(inserted_faq.inserted_id)
    return jsonify(faq), 201

# Update an existing FAQ by ID
@app.route('/faqs/<string:faq_id>', methods=['PUT'])
def update_faq(faq_id):
    try:
        faq = faq_collection.find_one({'_id': ObjectId(faq_id)})
        if faq is None:
            abort(404)

        data = request.json
        if not data or ('title' not in data and 'description' not in data):
            abort(400)

        updated_data = {
            'title': data.get('title', faq['title']),
            'description': data.get('description', faq['description'])
        }

        faq_collection.update_one({'_id': ObjectId(faq_id)}, {'$set': updated_data})
        updated_faq = faq_collection.find_one({'_id': ObjectId(faq_id)})
        updated_faq['_id'] = str(updated_faq['_id'])
        return jsonify(updated_faq), 200
    except Exception as e:
        abort(404)

# Delete an FAQ by ID
@app.route('/faqs/<string:faq_id>', methods=['DELETE'])
def delete_faq(faq_id):
    try:
        result = faq_collection.delete_one({'_id': ObjectId(faq_id)})
        if result.deleted_count == 0:
            abort(404)
        return jsonify({'message': 'FAQ deleted successfully'}), 200
    except Exception as e:
        abort(404)

if __name__ == '__main__':
    app.run(debug=True)





    
