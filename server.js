// 1. import express ด้วยการใช้ require
const express = require('express');

// 2. express() เป็นฟังค์ชั่น และ assign ไว้ที่ตัวแปร app
const app = express();

app.use(express.json())
 
// 3. app เป็น object และมี function ชื่อเดียวกับ HTTP Method ครับ
// ตัวอย่างคือ `.get()` เหมือนกับ GET
app.get('/', function (req, res) {
  res.send('Hello World')
});

// hi
app.get('/hi', (req, res) => {
    const { name, email } = req.query;
    res.send('hi!');
  });

// dynamic 
app.get('/hi/:name', (req, res) => {
    res.send(`by! ${req.params.name}`);
  });

  

  // ++++++++++++++ API ++++++++++++++++ //

  const url = '/api/v2'

  app.get(`${url}/hello/:message`, (req, res) => {
    const { params } = req
    res.json({ message: 'req!', params })
    res.send('Success')
  })

  app.get(`${url}/hello`, (req, res) => {
    res.send('Success')
  })

  ///////////////

  app.get(`${url}/products`, (req, res) => {
    res.json(products)
  })
  
  app.get(`${url}/products/:id`, (req, res) => {
    const { id } = req.params
    const result = products.find(product => product.id === id)
    res.json(result)
  })
  
  app.post(`${url}/products`, (req, res) => {
    const payload = req.body
    res.json(payload)
  })
  
  app.put(`${url}/products/:id`, (req, res) => {
    const { id } = req.params
    res.json({ id })
  })
  
  app.delete(`${url}/products/:id`, (req, res) => {
    const { id } = req.params
    res.json({ id })
  })

  // ========================================== //

// 4. listen() เป็น function คล้ายๆ http module เพื่อเอาไว้ระบุว่า server จะรัน ด้วย port อะไร
app.listen(9000, () => {
    console.log('Application is running on port 9000');
    console.log('http://localhost:9000/')
  })