require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors")
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const masterRoutes = require("./routes/masterRoutes");
// const userRoutes = require("./routes/userRoutes");
dotenv.config();
app.use(cors())
app.use(express.json());
// app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/master", masterRoutes);


app.listen(8000, () => {
    console.log(`Server runnning on port 8000`);
})