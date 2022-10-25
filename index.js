const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json')



app.get('/', (req, res)=>{
    res.send('digital learning platform')
})

app.get('/courses', (req, res)=>{
    res.send(courses);
})
app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const selectCourse = courses.find(c => c.id == id);
    res.send(selectCourse);
})

app.listen( port, (req, res)=>{
    console.log(`digital learning platform server load ${port}`)
})