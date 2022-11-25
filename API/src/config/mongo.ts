import mongoose from "mongoose";

const connect = () => {
  const {
    MONGO_PASSWORD,
    MONGO_PROTOCOL,
    MONGO_USER,
    MONGO_HOST,
    MONGO_DATABASE,
  } = process.env;
  const connectionUrl = `${MONGO_PROTOCOL}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`;
  try {
    return mongoose.connect(connectionUrl);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default connect;
