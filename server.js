const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const auth = require('./src/utils/auth/index');
const userService = require('./src/routes/users/users');
const passport = require('passport');
dotenv.config();

mongoose.connect(process.env.MONGODBURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(db => console.log(`MongoDb connected`), err => console.log(`Error connecting to MongoDb`, err))

const port = process.env.PORT || 9994
app.listen(port,()=>{
    console.log(`Server is launched at launchpad ${port}`)
})
app.use(express.json());
app.use(passport.initialize());
app.use('/users', userService );