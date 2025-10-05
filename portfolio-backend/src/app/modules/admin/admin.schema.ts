import { model, Schema } from "mongoose";
import { IUser } from "./admin.interface";

export const usersSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: false,
    },
  }
);

export const Users = model<IUser>("Users", usersSchema);
