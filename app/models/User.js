import { Schema, model, models } from "mongoose"

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (password) => password.length > 8,
        message: "Password must be longer than 8 characters",
      },
    },
  },
  {
    timestamps: true,
  }
)

export const User = models?.User || model("User", UserSchema)
