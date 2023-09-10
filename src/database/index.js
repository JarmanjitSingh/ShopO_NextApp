import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = `${process.env.MONGODB_URI}`;

  await mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Database has been connected."))
    .catch((err) =>
      console.log(`Getting error while connecting to db: ${err}`)
    );
};

export default connectToDB;
