import mongoose from "mongoose";

const connect = async () => {
    try {
  await mongoose.connect(process.env.MONGO).then(() => 
  console.log("Connected to MongoDB")
  );
  
} catch (error) {
    throw new Error("Connection failed..")
}
}

export default connect;