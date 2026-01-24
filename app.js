const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// routes
const admin = require("./routes/admin.js");
const shop = require("./routes/shop.js");

// server params
let port = 3000;
let host = "localhost";

// Application Settings /////////////////////////////////////////////////

app.set("view engine", "pug");
app.set("views", "./views");

// App Middlewares & Routes //////////////////////////////////////////////

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(__dirname + "/public"));

// use routes
app.use(admin.routes);
app.use(shop.routes);

// Serving //////////////////////////////////////////////////////////////

// start serving...
app.listen(port, host, () => {
    console.log("Server listening ... at http://" + host + ":" + port);
});