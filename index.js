const express = require("express");
const mongoose = require("mongoose");
const Product = require('./product.model');
const productRoutes = require('./product.routes')
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//routes
app.use("/api/products/", productRoutes)

app.get("/", (req, res) => {
  console.log(res.send("xyz"));
});

mongoose
  .connect(
    "mongodb+srv://pms:prathamesh@cluster0.6kfba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB connection success");
    app.listen(3000, () => {
        console.log("Server is running");
      });
  })
  .catch((error) => {
    console.log("DB connection failed", error);
  });
