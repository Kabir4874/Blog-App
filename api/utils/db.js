import mongoose from "mongoose";
export const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Mongodb in connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
