const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS STUFF
app.use("/static", express.static("static")); //FOR SERVING STATIC FILES
app.use(express.urlencoded());

//PUG STUFF
app.set("view engine", "pug"); //set template engine as pug
app.emit("views", path.join(__dirname, "views")); //set the views directory

app.get("/", (req, res) => {
  const params = { title: "" };
  res.status(200).render("index.pug", params);
});
app.get("/contact", (req, res) => {
  const params = { title: "" };
  res.status(200).render("contact.pug", params);
});
app.get("/home", (req, res) => {
  const params = { title: "" };
  res.status(200).render("home.pug", params);
});

//start theserver
app.listen(port, () => {
  console.log(`the application started on ${port}`);
});
