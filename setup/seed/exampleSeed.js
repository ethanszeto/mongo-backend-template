import mongoose from "mongoose";

export default [
  {
    _id: new mongoose.Types.ObjectId("0000000000000000"),
    firstName: "Johnny",
    lastName: "Appleseed",
    bio: "I plant apple trees.",
    creationDate: new Date("2025-01-01"),
    modificationDate: new Date("2025-01-01"),
  },
  {
    _id: new mongoose.Types.ObjectId("0000000000000001"),
    firstName: "Jane",
    lastName: "Doe",
    bio: "I prefer to be anonymous",
    creationDate: new Date("2025-01-05"),
    modificationDate: new Date("2025-01-05"),
  },
];
