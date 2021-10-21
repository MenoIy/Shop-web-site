import mongoose from 'mongoose';

async function dbConnect() {
  const MONGODB_URL = process.env.MONGODB_URL;

  if (!MONGODB_URL) {
    throw new Error(
      'Please define the MONGODB_URL environment variable inside .env.local'
    );
  }

  if (mongoose.connection) {
    console.log('already connected');
    return;
  }

  try {
    mongoose.connect(MONGODB_URL, () =>
      console.log('MongoDB connected successfully.')
    );
  } catch (error) {
    console.log(`Can't connect to mongodb : ${error}`);
  }

  return dbConnect;
}

export default dbConnect;
