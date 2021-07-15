const router = require('express').Router()

const Visitor = require('../models/visitor.model')

 
router.get('/', async(req, res)=>{
    const visitor = new Visitor({
        name: req.query.name || "Anónimo"               
    })
    await visitor.save()

    Visitor.find(function(err, visitors) {
        if (err) return console.error(err);
        console.log(visitors);
        res.render('index', {visitors: visitors})
    });    
 })






module.exports = router