const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://simple-CRUD-users:IMqLnC99ZzaaP1l7@cluster0.pjlhif7.mongodb.net/?appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const run = async () => {

  try {
    await client.connect();

    const db = client.db('simpleCrud');
    const userCollection = db.collection('users');

    app.get('/users', async (req, res) => {
      const cursor = userCollection.find();

      const result = await cursor.toArray();
      res.send(result);


    })






    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  }
  finally {
    // await client.close();
  }



}
run().catch(console.dir);




app.get('/', (req, res) => {
  res.send('Simple CRUD Server is Serving')
});



app.listen(port, () => {
  console.log(`Simple CRUD Server is Running on port ${port}`);

})
