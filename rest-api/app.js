import express from "express";
import mongoose from'mongoose'
import apiRoutes from './routes/apiRoutes.js'


const app = express()
app.use(express.json())
app.use(express.static('public')) //paima is public folderio css

const dbURI = 'mongodb+srv://node1user:ieva123@node1.jaiwtis.mongodb.net/restapi'

mongoose.connect(dbURI)
   .then(result => app.listen(3002))
   .catch(err => console.log(err))

app.set('view engine', 'ejs') 

//routes

app.get('/', (req, res) => res.render('home'))


app.get('/about', (req, res) =>{
    res.render('about')
})

app.get('/add-developer', (req, res) =>{
    res.render('add-developer')
})

app.use('/api', apiRoutes)

app.use((req, res) => {
    res.status(404).render('404')
})


