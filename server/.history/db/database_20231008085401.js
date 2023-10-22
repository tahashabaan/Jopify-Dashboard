import mongoose from "mongoose";

export async function connectToDatabase(URL) {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the MongoDB database!");
  } catch (error) {
    console.error("Error connecting to the MongoDB database:", error);
  }
}

export const closeConnect = async () => {
  await mongoose.connection.close();
};
