import mongoose from 'mongoose';

export interface UserData {
  _id: mongoose.Types.ObjectId;
  email: string;
  name: string;
  password: string;
}
