const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const courses = [
    { id: 1, name: 'course01' },
    { id: 2, name: 'course02' },
    { id: 3, name: 'course03' },
];

// ******* Handling GET Request *******

// To get all the courses
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// To get single course by given id
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with given ID not found');
    res.send(course);
});

// ******* Handling POST Request *******

// To create a new course
app.post('/api/courses', (req, res) => {
    // Input validation 
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});







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