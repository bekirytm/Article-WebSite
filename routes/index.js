const express = require('express');
const router = express.Router();

//MongoDB Schema
const Article = require('../models/Articles');


router.get('/homePage', (req, res, next) => {
  res.render('index', { title:"Makaleler"});
});


router.post('/home' , (req,res) => {

    const {articleName , articleContent , articleDate } = req.body;

    const article = new Article(req.body);
    const promise = article.save();

    promise.then((data) => {
        res.render('index' , { name : articleName , content: articleContent , date : articleDate , title:"Makaleler"});
    }).catch((err) => {
        res.json(err);
    });

});



module.exports = router;
