import mongoose from "mongoose";

export default async function connectToDatabase(url: string): Promise<void> {
  try {
    await mongoose.connect(url);
    return console.log("DB Connected");
  } catch (err) {
    return console.error(`Error trying to connect to: ${err}`);
  }
}
