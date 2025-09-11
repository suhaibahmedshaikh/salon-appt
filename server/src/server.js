import app from "./app.js";
import config from "./config/index.js";
import { connectDB } from "./libs/db.js";

const startServer = async () => {
  try {
    // connect to db
    await connectDB();
    // listen to request
    app.listen(config.PORT, () => {
      console.log(`Server is running on PORT: ${config.PORT}`);
    });
  } catch (error) {
    console.error("Error starting server: ", error);
    process.exit(1);
  }
};

startServer();
