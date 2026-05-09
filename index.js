const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
app.use(cors());
app.use(express.json());

const uri =`mongodb+srv://simple-CRUD-users:IMqLnC99ZzaaP1l7@cluster0.pjlhif7.mongodb.net/?appName=Cluster0`;


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

    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      };

      const user = await userCollection.findOne(query)

      console.log(id);
      res.send(user);
    });


    app.delete('/users/:id', async(req,res)=>{
      const id= req.params.id;
      console.log(id)
      const query={
        _id:new ObjectId(id)
      }
      const result= await userCollection.deleteOne(query);
      console.log(result)
      res.send(result);
    })

app.post('/users', async(req,res)=>{
  const newUser=req.body;
  console.log(newUser)
  const result=await userCollection.insertOne(newUser);
  res.send(result);
  console.log(result)
});


app.patch('/users/:id', async(req,res)=>{
  const id=req.params.id;
  const filter={
    _id: new ObjectId(id)
  }
  const modifiedUser=req.body;
  const updatedDocument={
    $set:{
name:modifiedUser.name,
email:modifiedUser.email,
role:modifiedUser.role
    }
  };
  const result= await userCollection.updateOne(filter,updatedDocument)
  res.send(result)
  console.log(result)
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
