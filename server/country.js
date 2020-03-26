const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const countrySchema = new Schema({
    days: [{
        
        confirmed: {
            type: Number,
            required: true,
        },
        
        recovered: {
            type: Number,
            required: true,
        },
        
        deaths: {
            type: Number,
            required: true
        },
    
        lastUpdate: {
            type: Date,
            required: true,
        },
    
        compare: {
            type: Number,
            require: true
        }
    }],
        
    
    name: {
            type: String,
            require: true,
        },
    cod: {
            type: String,
            require: true
        }
});

module.exports = model('Countries',countrySchema);