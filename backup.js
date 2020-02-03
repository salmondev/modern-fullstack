// 1. import express ด้วยการใช้ require
const express = require('express');

const mongoose = require('mongoose')

// 2. express() เป็นฟังค์ชั่น และ assign ไว้ที่ตัวแปร server
const server = express();

server.use(express.json())

mongoose.connect('mongodb://128.199.208.132:27017/product', { useNewUrlParser: true })
 
// 3. server เป็น object และมี function ชื่อเดียวกับ HTTP Method ครับ
// ตัวอย่างคือ `.get()` เหมือนกับ GET
server.get('/', function (req, res) {
  res.send('Hello World')
});

// hi
server.get('/hi', (req, res) => {
    const { name, email } = req.query;
    res.send('hi!');
  });

// dynamic 
server.get('/hi/:name', (req, res) => {
    res.send(`by! ${req.params.name}`);
  });

  

  // ++++++++++++++ API ++++++++++++++++ //

  const url = '/api/v2'

  server.get(`${url}/hello/:message`, (req, res) => {
    const { params } = req
    res.json({ message: 'req!', params })
    res.send('Success')
  })

  server.get(`${url}/hello`, (req, res) => {
    res.send('Success')
  })

  ///////////////

  server.get(`${url}/products`, (req, res) => {
    res.json(products)
  })
  
  server.get(`${url}/products/:id`, (req, res) => {
    const { id } = req.params
    const result = products.find(product => product.id === id)
    res.json(result)
  })
  
  server.post(`${url}/products`, (req, res) => {
    const payload = req.body
    res.json(payload)
  })
  
  server.put(`${url}/products/:id`, (req, res) => {
    const { id } = req.params
    res.json({ id })
  })
  
  server.delete(`${url}/products/:id`, (req, res) => {
    const { id } = req.params
    res.json({ id })
  })

  // ========================================== //

// 4. listen() เป็น function คล้ายๆ http module เพื่อเอาไว้ระบุว่า server จะรัน ด้วย port อะไร
server.listen(9000, () => {
    console.log('Application is running on port 9000');
    console.log('http://localhost:9000/')
  })