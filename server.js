const express = require('express');
const morgan = require('morgan');
const path = require("path");

const app = express();
app.use(morgan('dev'));

// Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku).
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

const router = require('./routes/api');
app.use('/api', router);

// Send every request to the React app.
// Define any API routes before this runs.
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Application is listening on port...
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log('Application is listening on port 3001');
});