const router = require('express').Router()



const Visitor = require('../models/visitor.model')


const isNameCreated = (req, res, next) => {

    
    next()
}

 
router.get('/', (req, res)=>{
    
    Visitor.findOne({ "name": req.query.name }, function(err, visitor) {
        if (err) return console.error(err);
        if(visitor){
            visitor.count = visitor.count + 1
            visitor.save(function (err){
            if(err) return console.error(err)
            })
            console.log(`coincidí ${visitor}`)

        }else {
            const visitor = new Visitor({
                name: req.query.name || "Anónimo"               
            })
            visitor.save()
            console.log(`se creó uno nuevo ${visitor}`);
        }
    });

    Visitor.find(function(err, visitors) {
        if (err) return console.error(err);
        console.log(visitors);
        res.render('index', {visitors: visitors})
    }); 
   
 })




  

module.exports = router