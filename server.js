var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"))
});

app.get("/api/reservation", function (req, res) {
    return res.json(reservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

