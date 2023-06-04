const express = require('express')
const app =express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1/shop").then(()=>{app.listen(5000,()=>{console.log('server started..')})}).catch(()=>console.log('ii'))

app.use('/api/users',require('./routers/users'))
app.use('/api/items',require('./routers/items'))


