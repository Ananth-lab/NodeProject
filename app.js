const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express()

dotenv.config();

app.use(bodyParser.json());

app.use(cors());

const adminRoutes = require("./routes/agency");

const clientRoutes = require("./routes/client")

app.use('/admin', adminRoutes);

app.use('/user', clientRoutes)

mongoose.connect(process.env.MONGO_DB)
.then(() => {
    app.listen(3000);
    console.log("Connected!")
})
.catch(err => {
    console.log(err)
})

