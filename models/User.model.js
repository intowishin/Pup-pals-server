const { Schema, model } = require("mongoose");
// const MyObjectId = mongoose.Types.ObjectId;

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    password: String,
    name: String,
    age: Number,
    gender: { type: String, enum: ["Male", "Female"] },
    about: String,
    // dog: [MyObjectId]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
