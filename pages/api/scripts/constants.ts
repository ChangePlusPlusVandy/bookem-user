import mongoose from 'mongoose';

// ------------------ CONSTANTS ------------------
export const SOURCES = ['social media', 'friend', 'news', 'other'];
export const ETHNICITY = ['white', 'black', 'asian', 'hispanic', 'other'];
export const GENDERS = ['male', 'female'];

// ------------------ CONFIGURATIONS ------------------
export const EVENTS: {
  name: string;
  program: string;
  isMultipleDays: boolean;
  requireApplication: boolean;
  tags?: string[];
}[] = [
  {
    name: 'Distribute books',
    program: 'BFNK',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Reading role model',
    program: 'RFR',
    isMultipleDays: true,
    requireApplication: true,
  },
  {
    name: 'Book drive',
    program: '',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Special event',
    program: '',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Interactive reading',
    program: 'RIF',
    isMultipleDays: true,
    requireApplication: true,
  },
  {
    name: 'Book sort, clean, process',
    program: '',
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Office work',
    program: '',
    tags: ['saved'],
    isMultipleDays: false,
    requireApplication: false,
  },
  {
    name: 'Book bus',
    program: '',
    tags: ['hidden'],
    isMultipleDays: false,
    requireApplication: false,
  },
];

export const INSERTED_TAGS = [
  {
    _id: new mongoose.Types.ObjectId('642a4e0a74c6976232783450'),
    tagName: 'saved',
  },
  {
    _id: new mongoose.Types.ObjectId('642a4e1274c6976232783451'),
    tagName: 'hidden',
  },
];

export const INSERTED_PROGRAMS = [
  {
    _id: new mongoose.Types.ObjectId('642a4dec74c697623278344d'),
    name: 'RIF',
  },
  {
    _id: new mongoose.Types.ObjectId('642a4dfc74c697623278344e'),
    name: 'RFR',
  },
  {
    _id: new mongoose.Types.ObjectId('642a4e0474c697623278344f'),
    name: 'BFNK',
  },
];

// ------------------ ENUMS ------------------
export enum EventStatus {
  Past = 'past',
  Current = 'current',
  Future = 'future',
}
