var express         = require("express");
var router          = express.Router();
var Item            = require("../models/item");
var Comment         = require("../models/comment");
     //============== Comments Route
    router.get("/items/:id/comments/new",isLoggedIn,function(req,res){
      //find item by id
      Item.findById(req.params.id,function(err,item){
        if(err){
         console.log(err);
        }else{
          res.render("comments/new",{items:item});
        }
      });
    });

    router.post("/items/:id/comments",isLoggedIn,function(req,res){
       
       //lookup items using ID
       Item.findById(req.params.id,function(err,item){
         if(err){
          console.log(err);
          res.redirect("/items");
         }
         else{
          //create new comment
          Comment.create(req.body.comment,function(err,comment){
           if(err){
            console.log(err);
           }
           else{
            //connect new comment to items
            item.comments.push(comment); 
            item.save();
            //redirect to show page
            res.redirect("/items/" + item._id);
           }

          });
        
         }
       });
       
    });

    function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect("/login");
    }
    module.exports = router;