const express = require("express");

const app = express();

const port = 3000;
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://triveni:Triveni%4007@cluster0.oah1xz9.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to DB"));

app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")
app.use("/teacher",teachRoutes);
app.use("/student",studRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

