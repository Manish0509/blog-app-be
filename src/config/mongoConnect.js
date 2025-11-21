import mongoose from "mongoose";

export const connectMongoDB = async (MONGODB_URL) => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "********** Database connection established successfully. **********"
    );
  } catch (err) {
    console.log(err.message);
  }
};
