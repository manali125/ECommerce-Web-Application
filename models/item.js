var mongoose    = require("mongoose"); 

//Schema setup
    var itemsSchema = new mongoose.Schema({
        name        : String,
        image       : String,
        price       : String,
        description : String,
         comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment" //name of the model
        }
       ] 

    });
    //model
    module.exports = mongoose.model("Item",itemsSchema);