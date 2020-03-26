const mongoose = require("mongoose");

const urlDB = process.env.URL_DB;

module.exports = async function connect() {
    try{
        await mongoose.connect(urlDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("DB connected")
    }catch(err){
        console.log(err);
    }
}