const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

    articleName : {
        type : String,
        default : "Article",
        required : true
    },
    articleContent : {
        type : String,
        required : true,
        default : "Article Content"
    },
    articleDate : {
        type : Date,
        default : Date.now
    }




});


module.exports = mongoose.model('article' , ArticleSchema);