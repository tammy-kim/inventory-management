var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
require("dotenv").config();

// const port = process.env.PORT;
const port = 3002;

var indexRouter = require("./routes/index");
var itemsRouter = require("./routes/items");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    // const PORT = process.env.PORT || 0;
    app.listen(port, () => {
      console.log(`App listening on ${port}`);
    });
  })
      // console.log("Connected to Inventory Management Database"));
  .catch((error) => console.error("MongoDB Connection Error:", error));

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/items", itemsRouter);

module.exports = app;

// npm install mongoose
// npm install dotenv