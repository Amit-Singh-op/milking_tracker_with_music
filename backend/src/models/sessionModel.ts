import mongoose, { Document, Schema } from "mongoose";

export interface ISession extends Document {
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  milkCollected: number;
}

const sessionSchema = new Schema<ISession>({
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  duration: { type: Number, required: true },
  milkCollected: { type: Number, required: true },
});

export default mongoose.model<ISession>("Session", sessionSchema);
