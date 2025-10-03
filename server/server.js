import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());

// Connect to AWS RDS MySQL
const db = mysql.createConnection({
  host: "database-1.chio4ikketso.us-east-2.rds.amazonaws.com", 
  user: "Cameron",
  password: "Leftovers48001!",
  database: "STAFF"
});

// Test connection
db.connect(err => {
  if (err) {
    console.error("DB connection failed: ", err);
  } else {
    console.log("Connected to AWS RDS MySQL!");
  }
});

// API route to get all staff
app.get("/staff", (req, res) => {
  db.query("SELECT * FROM staff", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
