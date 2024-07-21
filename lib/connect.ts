import mongoose from 'mongoose';
async function connect(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log('db connected..');
  } catch (error) {
    console.error(error);
  }
}
// import mongoose, { Mongoose } from 'mongoose';

// const MONGODB_URL = process.env.MONGODB_URL as string;

// interface MongooseConn {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConn = (global as any).mongoose;
// if (!cached) {
//   cached = (global as any).mongoose = {
//     conn: null,
//     promise: null,
//   };
// }

// export const connect = async () => {
//   if (cached.conn) return cached.conn;
//   cached.promise =
//     cached.promise ||
//     mongoose.connect(MONGODB_URL, {
//       dbName: 'code-snippet',
//       bufferCommands: false,
//       connectTimeoutMS: 30000,
//     });
//   cached.conn = await cached.promise;
//   return cached.conn;
// };

export default connect;
