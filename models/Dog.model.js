const { Schema, model } = require("mongoose");
// const MyObjectId = mongoose.Types.ObjectId;


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const dogSchema = new Schema(
  {
    // user: { type: MyObjectId, ref: 'User' },
    name: {
      type: String,
      unique: true
    },
    age: Number,
    size: {type: String, enum: ["Miniature", "Small", "Medium", "Large", "Very Large"]},    
    gender: {type: String, enum: ["Male", "Female"]},
    breed: String,
    about: String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Dog = model("Dog", dogSchema);

module.exports = Dog;
