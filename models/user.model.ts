import { Schema, model } from 'mongoose';
import { User } from '../interfaces';

const userSchema: Schema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
  },
  { timestamps: true }
);

export const userModel = model<User>('User', userSchema);
