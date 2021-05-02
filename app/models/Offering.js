const mongoose = require('mongoose');

const OfferingSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:[true,'Please add a name'],
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        location:{
            type: String,
            required:[true,'Please add a name'],
            maxlength: [50, 'Name can not be more than 50 characters']
        },
        phone:{
            type: String,
            required:[true,'Please add a name'],
            maxlength: [50, 'Name can not be more than 50 characters']
        }
    }
);