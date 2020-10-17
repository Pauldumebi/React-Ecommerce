import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute'
dotenv.config();

const MongodbUrl = config.MONGODB_URL;
mongoose.connect(MongodbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
}).catch(error => console.log(error.reason));


const app = express();

app.use("/api/users", userRoute)
app.get("/api/products/:id", (req, res)=> {
   const productId = req.params.id;
   const product = data.products.find(x=>x._id === productId)
      if(product)
         res.send(product);
      else 
         res.status(404).send({msg: "Product Not Found."})
  });
app.get("/api/products/", (req, res)=> {
   res.send(data.products)
});

const port = process.env.PORT || 8000;
app.listen(port, ()=> {console.log(`Server started at http://localhost:${port}`) });