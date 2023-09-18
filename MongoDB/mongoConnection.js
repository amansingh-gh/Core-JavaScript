const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-commerce';
const client = new MongoClient(url);

async function getData() {

    let res = await client.connect();
    let db = res.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response)
}

getData()