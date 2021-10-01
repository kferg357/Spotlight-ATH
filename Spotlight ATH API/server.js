var express = require("express");
var app = require("express")();
var http = require("http").Server(app);

var port = 4444;
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.send("Hello from Express!");
});
app.get("/about", function (req, res) {
  res.send("about");
});

app.get("/login", function (req, res) {
    res.setHeader('Content-Type', 'application/json');

var userData = {
    "userID": "1",
    "username": "TestUser"
    }

    res.end(JSON.stringify(userData));
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on ${port}`);
});
// http.listen(port, function(){​​​
// // console.log('listening on *:' + port);
// }​​​);
