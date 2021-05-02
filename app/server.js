const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");


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
    res.send("Hello");
})

app.get("/getdistrictdetails", (req,res)=>{
    const district = req.query.district;
    const response = `Hello from server for ${district}`;
    res.status(200).json({
        districtDetails: response
    })
})

const server = app.listen(PORT,()=>{
    console.log(`Server running in PORT ${PORT}`)
})
