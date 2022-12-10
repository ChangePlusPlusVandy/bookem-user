import mongoose from 'mongoose';

export interface UserData {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  sourceHeardFrom: string;
  ethnicity: string;
  gender: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VolunteerLogData {
  _id: mongoose.Types.ObjectId;
  school?: string;
  teacher?: string;
  date: Date;
  hours: number;
  userId: mongoose.Types.ObjectId;
  feedback?: string;
  numBooks?: number;
  createdAt: Date;
}

export interface VolunteerApplicationData {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  isApproved?: boolean;
  emergencyContact: {
    firstName: string;
    lastName: string;
    phone: string;
    relationship: string;
  };
  workStatus?: string;
  employer?: string;
  opportunities?: Array<string>;
  createdAt: Date;
  updatedAt: Date;
}
