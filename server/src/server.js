import app from "./app.js";
import { PORT } from "./config/envConfig.js";
import { connectDB } from "./config/dbConfig.js";

const startServer = async () => {
  try {
    // connect to db
    await connectDB();
    // listen to request
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server: ", error);
    process.exit(1);
  }
};

startServer();
