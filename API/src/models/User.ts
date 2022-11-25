import { Schema, model } from "mongoose";
import { UserType } from "types";

const userSchema = new Schema<UserType>({
  firstName: {
    type: Schema.Types.String,
    required: true,
  },
  lastName: {
    type: Schema.Types.String,
    required: true,
  },
  birthday: {
    type: Schema.Types.Date,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.String,
    required: true,
  },
  confirmed: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const User = model<UserType>("User", userSchema);

export default User;
