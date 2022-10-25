const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')



app.get('/', (req, res)=>{
    res.send('digital learning platform')
})

app.get('/courses', (req, res)=>{
    res.send(courses);
})
app.listen( port, (req, res)=>{
    console.log(`digital learning platform server load ${port}`)
})