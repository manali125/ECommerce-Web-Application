var express         = require("express"),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"), 
    passport      = require("passport"),
    LocalStrategy = require("passport-local");
    Item          = require("./models/item"), 
    Comment       = require("./models/comment"),
    User          = require("./models/user");
    seedDB        = require("./seeds");
    app           = express();
    
    var commentRoutes = require("./routes/comments"),
        itemRoutes    = require("./routes/items"),
        indexRoutes   = require("./routes/index");

    mongoose.connect("mongodb://localhost/eshop");
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(express.static(__dirname + "/public"));
   
    app.set("view engine","ejs");
    seedDB();

    //Passport Configuration
    app.use(require("express-session")({
    secret: "Rusty is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());

    app.use(function(req,res,next){
      res.locals.currentUser = req.user;
      next();
    });

    app.use(indexRoutes);
    app.use(itemRoutes);
    app.use(commentRoutes);
   
    app.listen(3000, function(){
    console.log("Ecommerce server started at port 3000");
    });