'use strict';

const express = require('express');
const app = express();

app.use(express.static("public"));

app.set("port", process.env.PORT || 4000);

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/public/main.html");
})

const server = app.listen(app.get("port"), function () {

  const host = server.address().address
  const port = server.address().port

  console.log("Node.js API app listening at http://%s:%s", host, port)

})
