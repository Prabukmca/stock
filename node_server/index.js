const Joi = require("joi");
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
const app = express();
app.use(express.json());

// mongoose.connect('mongodb+srv://Prabu:<mongo@123>@stock.0wpxc.mongodb.net/<interviewportal>?retryWrites=true&w=majority').then(()=>console.log('mongodb connected...' ))
// .catch(err => console.log('Mongodb not connected...', err));

const db = mongoose.connect('mongodb://localhost:27017/stockdb', function (err, response) {
  if (err) {
    console.log('Error Occurred While Connecting Mongo DB', err);
  } else {
    console.log(`Mongodb connected to ${db} - ${response}`);
  }

});

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
})

const courseSchema = new mongoose.Schema({
  category
});

const Course = mongoose.model('Course', courseSchema);
const course = new Course({
  name: 'test course',
  author: 'autor',
  tags: ['one', 'two'],
  isPublished: true
});

const courses = [
  { id: 1, name: "test 1" },
  { id: 2, name: "test 2" },
];

app.get("/", (req, res) => {
  res.send("Hello..");
});
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  // let schema = Joi.object({
  //   id: Joi.required(),
  //   name: Joi.string().min(2).required(),
  // });
  // schemas = Joi.array().items(schema);

  let schemas = Joi.array().items(
    Joi.object({
      name: Joi.string().min(2).required(),
    })
  );
  // const result = schemas.validateAsync(req.body);

  const { error } = schemas.validate(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const incomming = req.body;
  incomming.forEach((element) => {
    const course = {
      id: courses.length + 1,
      name: element.name,
    };
    courses.push(course);
  });

  console.log("post courses", courses);

  res.send(courses);
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given id not found");
  }
  const { error } = validateCourse(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
  });
  const result = schema.validate(course);
  console.log("update result", result);
  return result;
}

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).send("The course with the given id not found");
  }
  const index = courses.indexOf(course);
  courses.splice(index, 1);
  res.send(course);
});
const port = process.env.PORT || 3200;
// const port = 3200;
app.listen(port, () => console.log(`Listening on port ${port}....`));
