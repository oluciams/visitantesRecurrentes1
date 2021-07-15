const mongoose = require ('mongoose')


const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    name:{
        type: String,        
    },
    count: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('visitor', visitorSchema) 