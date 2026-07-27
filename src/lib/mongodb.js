import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const databaseName = process.env.dbName

if (!MONGODB_URI || !databaseName) {
  throw new Error("Please completed your .env");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: databaseName,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}