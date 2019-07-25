const express = require('express');
const router = express.Router();
// import burger
const db = require('../models/');

// Create the router for the app, and export the router at the end of your file.
router.get('/', (req, res) => {
    res.redirect("/burgers");
});


router.get("/burgers", function(req, res) {
 
    db.Burger.findAll()
      
      .then(function(dbBurger) {
        console.log(dbBurger);
   
        var hbsObject = { burger: dbBurger };
        return res.render("index", hbsObject);
      });
  });
  
  
  router.post("/burgers/create", function(req, res) {
    
    db.Burger.create({
      burger_name: req.body.burger_name
  
      .then(function(dbBurger) {
        
        console.log(dbBurger);
        
        res.redirect("/");
      });
  });
  
  router.put("/burgers/update/:id", function(req, res) {
   
    db.Burger.update({
      devoured: true
    },
    {
      where: {
        id: req.params.id
      }
    }
    ).then(function(dbBurger) {
      res.json("/");
    });
  });
  
  module.exports = router;
  