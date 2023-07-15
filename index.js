// Env
require("dotenv").config();
// Express
const express = require("express");
const app = express();
// Cors
const cors = require("cors");

// Firebase
const connectFirebase = require("./config/firebase");
connectFirebase()

// Swagger
const swaggerUI = require("swagger-ui-express");
const apiDocumentation = require("./apiDocs.json");
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocumentation));

// middlewares
var corsOptions = {
  origin:  ["http://localhost:5173", "https://hospital-sistem.vercel.app", "hospital-sistem.vercel.app"],
};
app.use(cors(corsOptions));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: false })); // parse requests of content-type - application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the jungle!" });
});

// const Log = require("./models/rekam_medis_log");
// app.get("/delete", async (req, res) => {
//   try {
//     await Log.deleteMany({});
//     res.json({ message: "All data deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to delete data" });
//   }
// });

const Dashboard = require("./controllers/dashboardController");
const protect = require("./middlewares/protect");

// Endpoint
const authRoutes = require("./routes/authRoute");
const nurseRoutes = require("./routes/nurseRoute");
const doctorRoutes = require("./routes/doctorRoute");
const roomRoutes = require("./routes/roomRoute");
const drugRoutes = require("./routes/drugRoute");
const patientRoutes = require("./routes/patienRoute");
const icdRoutes = require("./routes/icdRoute");
const bpjsRoutes = require("./routes/bpjsRoute");
const rekamMedisRoutes = require("./routes/rekamMedisRoute");
const receiptRoutes = require("./routes/receiptRoute");
const adminRoutes = require("./routes/adminRoute");

app.get("/api/dashboard", protect, Dashboard.getDashboard);
app.use("/api", authRoutes);
app.use("/api", nurseRoutes);
app.use("/api", doctorRoutes);
app.use("/api", roomRoutes);
app.use("/api", drugRoutes);
app.use("/api", patientRoutes);
app.use("/api", icdRoutes);
app.use("/api", bpjsRoutes);
app.use("/api", receiptRoutes);
app.use("/api", adminRoutes);
app.use("/api/rekam-medis", rekamMedisRoutes);

// MongoDB
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db");
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
