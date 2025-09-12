import app from "./app.js";
import config from "./config/index.js";
import { connectDB, disconnectDB } from "./lib/db.js";

let server;

const startServer = async () => {
  try {
    // connect db
    await connectDB();
    // listen to request
    server = app.listen(config.PORT, () => {
      console.log(`Server is running on PORT: ${config.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server: ", error);
    process.exit(1);
  }
};

const shutdownServer = async (signal) => {
  console.log(`\n🛑 ${signal} received. Shutting down gracefully...`);

  try {
    // closing server
    if (server) {
      await new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) return reject(err);
          console.log("✅ HTTP server closed.");
          resolve();
        });
      });
    }

    // discount db
    await disconnectDB();
    console.log("✅ Server Shutdown complete.");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during shutdown: ", error);
    process.exit(1);
  }
};

process.on("SIGTERM", shutdownServer);
process.on("SIGINT", shutdownServer);

startServer();
