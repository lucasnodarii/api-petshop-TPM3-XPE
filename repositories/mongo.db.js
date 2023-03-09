import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connect() {
  const uri = process.env.MONGO_URI;
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "petshop",
  });
}

export { connect };
