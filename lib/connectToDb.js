import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("رشته اتصال به دیتابیس پیدا نشد");
    }
    let cached = global.mongoose;
    if (!cached) {
      cached = global.mongoose = { conn: null, promise: null };
    }
    if (cached.conn) {
      return cached.conn;
    }
    if (!cached.promise) {
      cached.promise = mongoose.connect(mongoUri).then((mongoose) => {
        return mongoose;
      });
    }
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.log(error);
    throw new Error("اتصال به دیتابیس موفقیت آمیز نبود");
  }
};

export default connectToDb;
