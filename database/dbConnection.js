import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MongoDB connection URI is not defined in environment variables.");
    }

    //console.log("MongoDB URI:", process.env.MONGO_URL);  // Add this line to see if the URI is correct.

    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "BLOGGING_APP",
    });

    console.log("Connected to the database!");
  } catch (err) {
    console.error(`Some error occurred while connecting to the database: ${err.message}`);
    process.exit(1);
  }
};


export default dbConnection;
 