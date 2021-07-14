const router = require('express').Router()

const Visitor = require('../models/visitor.model')

 
router.get('/', async(req, res)=>{
    const visitor = new Visitor({
        name: req.query.name || "Anónimo"               
    })
    await visitor.save()

    res.send('hola n')
    
 })






module.exports = router