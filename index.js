const express = require('express')
const controller = require('./helper/controller')
const logger = require('./helper/logger')

const app = express();

app.use(express.json());

app.use(logger)

app.get('/api/courses', controller.getAll);

app.get('/api/courses/:id', controller.getById);

app.post('/api/courses', controller.createCourse);

app.put('/api/courses/:id', controller.updateCourse);

app.delete('/courses/:id', controller.deleteCourse);























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