var express = require("express");
var path = require("path");

//define server variables-----------------------------------------
var app = express();
// var PORT = 3000;
var PORT = process.env.PORT;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//html modifiers--------------------------------------------------
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"))
});

//pull api data as json-------------------------------------------
app.get("/api/reservation", function (req, res) {
    return res.json(reservation);
});

//create new reservation as json----------------------------------
app.post("/api/reservation", function(req, res) {
    var newReservation = req.body;
  
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newReservation);
  
    characters.push(newReservation);
  
    res.json(newReservation);
  });

//initialize host service-----------------------------------------
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

