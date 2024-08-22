const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://habeebchishti:Stinger999%40@foodoctopus.eodkt.mongodb.net/foodOctopus?retryWrites=true&w=majority&appName=foodOctopus";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {});
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    const fetchedData = await mongoose.connection.db
      .collection("foodData")
      .find({})
      .toArray();
    console.log("Fetched Data:", fetchedData);
  } catch (error) {
    console.error("COULD NOT CONNECT TO DATABASE:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = connectToMongoDB;
