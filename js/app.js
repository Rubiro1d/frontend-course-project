const express = require("express");
const app = express();
 
app.use(function (request, response) {
  express.static("C:/Users/vova_/internet-shop");
});
 
app.listen(3000);