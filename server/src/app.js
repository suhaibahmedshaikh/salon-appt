import express from "express";
import cors from "cors";
import appRouter from "./routes/index.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api endpoints
app.use("/api/v1", appRouter);

// api health check route
app.get("/health", (req, res) => {
  res.send("Api working....");
});

export default app;