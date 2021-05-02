const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require('mongoose');



// Load env variables
dotenv.config({ path: './config/config.env' });


const app = express();
app.use(express.json());
app.use(cors())


const PORT = 3001;

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'));
}

app.get("/", (req,res)=>{
    console.log(data);
    res.send("Hello");
})

app.get("/getdistrictdetails", (req,res)=>{
    const district = req.query.district;
    // Take the district->get district wise details(availability)
    const response = `Hello from server for ${district}`;
    res.status(200).json({
        districtDetails: response
    })
})

app.post("/request-info", (req, res, next) => {
   
    const response = req.body;
    console.log(req.body);
    res.status(200).json({
        response
    });

  });

const server = app.listen(PORT,()=>{
    console.log(`Server running in PORT ${PORT}`)
})



