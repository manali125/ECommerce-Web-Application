var express         = require("express");
var router          = express.Router();

//index
  
    router.get("/items",function(req,res){

         //get all the items from DB
         Item.find({},function(err,allItems){
          if(err){
            console.log(err);
          }else{
            res.render("items/index",{items:allItems,currentUser:req.user});
          }
         });
   
    }); 

    router.post("/items",function(req,res){
        
      //get data from form and add to items array
      var name        = req.body.name;
      var image       = req.body.image;
      var price       = req.body.price;
      var description = req.body.description;
      var newItem     = {name:name,image:image,price:price,description:description};
      //create and campground and save it to DB
      Item.create(newItem,function(err,newCreated){
      if(err){
        console.log(err);
      }else{
        //redirect back to items
         res.redirect("/items");
      }
      });
      
    });
    //new
    router.get("/items/new",function(req,res){
         res.render("items/new");
    });
    //Show- shows each item
    router.get("/items/:id",function(req,res){
      //find the item with specific id
      Item.findById(req.params.id).populate("comments").exec(function(err,foundItem){
       if(err){
        console.log(err);
       }else{
        //render show template
        console.log(foundItem);
        res.render("items/show",{items:foundItem});
       }
      });
      
    });

    module.exports = router;
    