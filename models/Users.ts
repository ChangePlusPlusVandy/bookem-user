import mongoose from 'mongoose';

// UserSchema describes what our documents should look like in our User collections
const UserSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
