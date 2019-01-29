const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/api");

// Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku).
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Use apiRoutes.
// app.use("/api", apiRoutes);

// add routes form api and view
app.use(routes);

// connect to mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/pTrak");

// Send every request to the React app.
// Define any API routes before this runs.
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});