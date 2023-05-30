// Env
require("dotenv").config();
// Express
const express = require("express");
const app = express();
// Cors
const cors = require("cors");
// MongoDB
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

// Swagger
const swaggerUI = require("swagger-ui-express");
const apiDocumentation = require("./apiDocs.json");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocumentation));

// middlewares
var corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the jungle!" });
});

// Endpoint
const authRoutes = require("./routes/authRoute");
const nurseRoutes = require("./routes/nurseRoute");
const doctorRoutes = require("./routes/doctorRoute");
const roomRoutes = require("./routes/roomRoute");
const drugRoutes = require("./routes/drugRoute");
const patientRoutes = require("./routes/patienRoute");
const icdRoutes = require("./routes/icdRoute");

app.use("/api", authRoutes);
app.use("/api", nurseRoutes);
app.use("/api", doctorRoutes);
app.use("/api", roomRoutes);
app.use("/api", drugRoutes);
app.use("/api", patientRoutes);
app.use("/api", icdRoutes);
