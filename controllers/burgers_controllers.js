const burgers = require("../models/burger");
const express = require("express");
const router = express.Router();

//renders the default index
router.get("/", function (req,res) {
    burgers.all(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
    res.render("index", hbsObject);
    });
});


router.put("/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
    });
  });
  