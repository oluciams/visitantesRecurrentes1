const router = require('express').Router()


const Visitor = require('../models/visitor.model')

 
router.get('/', async (req, res)=>{

    let visitor
    let name = req.query.name || "Anónimo"
    if (name === "Anónimo"){
        visitor = new Visitor({name: name})
    }else {
        visitor = await Visitor.findOne({ name:name})
        if(visitor){
            visitor.count += 1
        }else {
            visitor = new Visitor({name: name})
        }
    }

    await visitor.save()

    const visitors = await Visitor.find()
    res.render('index', {visitors: visitors})   
 })
  

module.exports = router