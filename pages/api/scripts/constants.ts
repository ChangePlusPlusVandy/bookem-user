import mongoose from 'mongoose';

// ------------------ CONSTANTS ------------------
export const SOURCES = ['social media', 'friend', 'news', 'other'];
export const ETHNICITY = ['white', 'black', 'asian', 'hispanic', 'other'];
export const GENDERS = ['male', 'female'];

// ------------------ CONFIGURATIONS ------------------
export const EVENTS: {
  name: string;
  tag: string;
  isMultipleDays: boolean;
  requireApplication: boolean;
}[] = [
  {
    name: 'Distribute books',
    tag: 'BFNK',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Reading role model',
    tag: 'RFR',
    isMultipleDays: true,
    requireApplication: true,
  },
  {
    name: 'Book drive',
    tag: '',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Special event',
    tag: '',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Interactive reading',
    tag: 'RIF',
    isMultipleDays: true,
    requireApplication: true,
  },
  {
    name: 'Book sort, clean, process',
    tag: '',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Office work',
    tag: '',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Book bus',
    tag: '',
    isMultipleDays: false,
    requireApplication: false,
  },
];

export const INSERTED_TAGS = [
  {
    _id: new mongoose.Types.ObjectId('642a4dec74c697623278344d'),
    tagName: 'RIF-2023',
  },
  {
    _id: new mongoose.Types.ObjectId('642a4dfc74c697623278344e'),
    tagName: 'RFR-2023',
  },
  {
    _id: new mongoose.Types.ObjectId('642a4e0474c697623278344f'),
    tagName: 'BFNK-2023',
  },
  {
    _id: new mongoose.Types.ObjectId('642a4e0a74c6976232783450'),
    tagName: 'saved',
  },
  {
    _id: new mongoose.Types.ObjectId('642a4e1274c6976232783451'),
    tagName: 'hidden',
  },
];

// ------------------ ENUMS ------------------
export enum EventStatus {
  Past = 'past',
  Current = 'current',
  Future = 'future',
}
