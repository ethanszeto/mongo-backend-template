import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ExampleSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String },
    creationTime: { type: Date, required: true },
    modificationTime: { type: Date, required: true },
  },
  {
    collection: "examples",
  }
);
const db = mongoose.connection.useDb("examples");
const Example = db.model("Example", ExampleSchema);

export default Example;
