// const Joi = require("joi");
const express = require("express");
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// app.use(bodyParser.json({ limit: '5mb' }));
// app.use(bodyParser.urlencoded({ extended: true }));
const app = express();
app.use(express.json());

// mongoose.connect('mongodb+srv://Prabu:<mongo@123>@stock.0wpxc.mongodb.net/<interviewportal>?retryWrites=true&w=majority').then(()=>console.log('mongodb connected...' ))
// .catch(err => console.log('Mongodb not connected...', err));

// const db = mongoose.connect('mongodb://localhost:27017/stockdb', function (err, response) {
//   if (err) {
//     console.log('Error Occurred While Connecting Mongo DB', err);
//   } else {
//     console.log(`Mongodb connected to ${db} - ${response}`);
//   }

// });

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
})

const courses = [
  { id: 1, name: "test 1" },
  { id: 2, name: "test 2" },
];

app.get("/", (req, res) => {
  res.send("Hello..");
});
const port = process.env.PORT || 3200;
// const port = 3200;
app.listen(port, () => console.log(`Listening on port ${port}....`));
