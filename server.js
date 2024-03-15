const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();

const app = express.env.PORT || 3000;
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//recordar la rutas

// conección a mongo
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log('Conexión a mongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) =>{
        console.error('Error connecting to MongoDB:', error.message);
    })