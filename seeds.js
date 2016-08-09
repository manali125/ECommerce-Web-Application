var mongoose    = require("mongoose"),
    Comment     = require("./models/comment"),
    Item        = require("./models/item"); 

var data = [
	{
		name:  "Hat",
		image: "http://www.seawok.com/inventory_images/11.jpg",
		price: "20",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	 
	},
	{
		name:  "Bracelet",
		image: "http://media.tiffany.com/is/image/Tiffany/EcomBrowseM/paloma-picasso-olive-leaf-vine-bracelet-34941025_951478_ED.jpg?op_usm=1.00,1.00,6.00&defaultImage=NoImageAvailable&&",
		price: "100",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	 
	},
	{
		name:  "Glares",
		image: "http://ecx.images-amazon.com/images/I/712xl9B2xIL._UX522_.jpg",
		price: "150",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	 
	}


];
function seedDB(){
	//remove all items
	Item.remove({},function(err){
	if(err) {
	       console.log(err);
			}else
       	   console.log("removed");
	       	   //add new items
	      data.forEach(function(seed){
	      Item.create(seed,function(err,data){
	         	if(err) {
		       console.log(err);
				}else{
	       	   console.log("saved");
	       	   //add few cmments
	       	   Comment.create(
	       	   {
                  text: "Beautiful collection",
                  author: "Manali"
	       	   },function(err,comment){
                  if(err){
                   console.log(err);
                  }
                  else{
                   data.comments.push(comment);
                   data.save();
                   console.log("created new comment");
                  }
	       	   });
	       }
	       });
	      });
	});
	
}

module.exports = seedDB;