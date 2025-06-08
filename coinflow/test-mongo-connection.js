// Standalone MongoDB Atlas connection test for Node.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://rehanjalali0130:Kakabuli0130@cluster0.rxnx35b.mongodb.net/admin?retryWrites=true&w=majority&appName=Cluster0&authSource=admin";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  } finally {
    await client.close();
  }
}

run();
