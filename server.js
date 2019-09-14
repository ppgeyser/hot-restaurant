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

//reservation object----------------------------------------------

var reservations = [{
        customerName: "Ahmed",
        customerEmail: "afhaque89@gmail.com",
        phoneNumber: "979-587-0887",
        customerID: "afhaque89"
    }, {
        customerName: "Buddy E Toups",
        customerEmail: "mydesignbuddy@gmail.com",
        phoneNumber: "7138254601",
        customerID: "BUDDYT"
    }, {
        customerName: "Tierra",
        customerEmail: "trafarris@gmail.com",
        phoneNumber: "7204381472",
        customerID: "^__^"
    },
    {
        customerName: "sparta",
        customerEmail: "kickemtothepit@gmail.co",
        phoneNumber: "300-300-3000",
        customerID: "r3030"
    },
    {
        customerName: "Drew",
        customerEmail: "d@noemail.com",
        phoneNumber: "11111111111111",
        customerID: "sfd23"
    }
];

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
    return res.json(reservations);
});

//create new reservation as json----------------------------------
app.post("/api/reservation", function (req, res) {
    var newReservation = req.body;

    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    reservations.push(newReservation);

    res.json(newReservation);
});

//initialize host service-----------------------------------------
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});