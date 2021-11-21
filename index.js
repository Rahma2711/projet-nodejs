const express = require("express");
const app = express();
const mongoose = require('mongoose');
//DATABASE CONNECTION 
mongoose.connect('mongodb+srv://Rahma:3keGzaIiH9ok5JF2@cluster0.9grme.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });
  mongoose.connection.on("error", (err) => {
    console.log("DB connection failed with - ", err);
  });
  // IMPORT ROUTERS
const gestionRoutes = require("./routes/gestion.routes");
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// ROUTER MIDDLEWARE
app.use("/gestions", gestionRoutes);
//SERVER LISTENING
const port = 8000;
app.listen(port, () => {
  console.log("this server yemchi 3al port" + port);
});