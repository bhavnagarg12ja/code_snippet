import mongoose from 'mongoose';
async function connect(): Promise<void> {
  try {
    await mongoose.connect(
      'mongodb+srv://bhavnagarg12ja:bhavnagarg12ja@cluster0.zdyihlz.mongodb.net/SNIPPETMASTER'
    );
    console.log('db connected..');
  } catch (error) {
    console.error(error);
  }
}

export default connect;
