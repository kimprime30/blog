import mongoose, { Schema, Document } from "mongoose";

interface IComment extends Document {
  content: string;
  post: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
}

const CommentSchema: Schema = new Schema({
  content: { type: String, required: true },
  post: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
  author: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.models.Comment ||
  mongoose.model<IComment>("Comment", CommentSchema);
