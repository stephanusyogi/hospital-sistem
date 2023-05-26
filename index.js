// Env
require("dotenv").config();
// Express
const express = require("express");
const app = express();
// Cors
const cors = require("cors");
// Morgan
const morgan = require("morgan");
// MongoDB
const connectDB = require("./config/db");
// Swagger
const swaggerUI = require("swagger-ui-express");
const apiDocumentation = require("./apiDocs.json");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocumentation));

const nurseRoutes = require("./routes/nurseRoute");

const PORT = process.env.PORT || 3000;

// middlewares
var corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the jungle!" });
});

// Endpoint
app.use("/api", nurseRoutes);
