import { Schema, model } from 'mongoose';
import { User } from '../interfaces';

export interface UserModel extends User {
  password: string;
  role: string;
}

const userSchema: Schema = new Schema<UserModel>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' },
});

export const userModel = model<UserModel>('User', userSchema);
