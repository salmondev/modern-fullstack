const express = require("express");
const mongoose = require("mongoose");
const server = express();
const Product = require("./product");

const router = express.Router();
server.use('/api/v2', router);

server.use(express.json());

mongoose.connect("mongodb://128.199.208.132:27017/product", {
  useNewUrlParser: true
});

mongoose.connection.on("error", err => {
  console.error("MongoDB error", err);
});

server.get("/", function(req, res) {
  res.send("API");
});

// ++++++++++++++ API ++++++++++++++++ //



router.get('/testapi', (req, res) => {
  res.send("Success");
});

///////////////

/* server.get(`${url}/products`, (req, res) => {
    res.json(products)
  })*/

// mock data
const products = [{}];

router.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.post('/products', async (req, res) => {
  const payload = req.body;
  const product = new Product(payload);
  await product.save();
  res.status(201).end();
});

router.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
});

router.post('/products', (req, res) => {
  const payload = req.body;
  res.json(payload);
});

router.put('/products/:id', async (req, res) => {
  const payload = req.body;
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, { $set: payload });
  res.json(product);
});

router.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  await Product.findByIdAndDelete(id);
  res.status(204).end();
});

// ========================================== //

server.listen(9000, () => {
  console.log("Application is running on port 9000");
  console.log("http://localhost:9000/");
});
