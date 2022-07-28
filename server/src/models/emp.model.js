const mongoose = require("mongoose");




const empSchema = new mongoose.Schema({
    employee_name: {type: String},
    employee_id:{type: String},
    salary:{type: String},
    image:{type: String},
    username:{type: String},
    password:{type: String},
    tasks: {type: String},
}
);

module.exports = mongoose.model("emp", empSchema)