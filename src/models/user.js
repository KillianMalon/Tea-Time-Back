import {model, Schema} from "mongoose";

const UserSchema = new Schema(
  {
    email_user: { type: String, required: true },
    phone_user: { type: String, required: true },
    password_user: { type: String, required: true },
    referant: { type: Boolean, required: false, default: false },
    referantPicturePath: { type: String, required: false },
  },
  { timestamps: true }
);

export default model('User', UserSchema);