import mongoose from "mongoose";

const connect = async () => {

    try {
  await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
    console.log("Connected to the database");
  })
} catch (error) {
    throw new error("Connection failed..")
}
}

export default connect