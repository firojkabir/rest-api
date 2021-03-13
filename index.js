const Joi = require('joi');
const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "learning"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connection established!!");
});


// app.get('/courses', (req, res) => {
//     con.query('SELECT * FROM courses', function (err, results) {
//         if (err) throw err
//         return res.json({
//             message: "All the courses find out successfully",
//             data: results
//         })
//     })
// });


// app.get('/courses/:id', (req, res) => {
//     let id = req.params.id
//     // const course = find(parseInt(id));
//     // if (!course) return res.status(404).send('The course with given ID was not found');

//     con.query(`SELECT * FROM courses WHERE id = ${id}`, function (err, results) {
//         if (err) throw err
//         return res.json({
//             message: "Find out specific course successfully",
//             data: results[0]
//         })
//     })
// });


// app.post('/courses', (req, res) => {
//     con.query(`INSERT INTO courses (name) VALUES ('${req.body.name}')`, function (err, results) {
//         if (err) throw err
//         return res.json({
//             message: "New course inserted successfully",
//             data: results[0]
//         })
//     })
// });




























// const courses = [
//     { id: 1, name: 'course01' },
//     { id: 2, name: 'course02' },
//     { id: 3, name: 'course03' },
// ];

// // ******* Handling GET Request *******

// // To get all the courses
// app.get('/api/courses', (req, res) => {
//     res.send(courses);
// });

// // To get single course by given id
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send('The course with given ID was not found');
//     res.send(course);
// });

// // ******* Handling POST Request *******

// // To create a new course
// app.post('/api/courses', (req, res) => {
//     // Input validation 
//     const { error } = validateCourse(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });

// // ******* Handling PUT Request *******

// // To update a course
// app.put('/api/courses/:id', (req, res) => {
//     console.log(req.params.id)
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send('The course with given ID was not found');

//     // Input validation 
//     const { error } = validateCourse(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     course.name = req.body.name;
//     res.send(course);
// });


// // ******* Handling DELETE Request *******

// // To delete a course
// app.delete('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) return res.status(404).send('The course with given ID was not found');

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(course);
// });


// // Function for Input validation
// function validateCourse(course) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };

//     return Joi.validate(course, schema);
// }


//Route Parameters(required value)
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.params);
// });

//Query Parameters(optional value)
// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));