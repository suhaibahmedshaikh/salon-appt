import express from "express";

const app = express();

// api endpoints

// api health check route
app.get("/health", (req, res) => {
  res.send("Api working....");
});

export default app;
