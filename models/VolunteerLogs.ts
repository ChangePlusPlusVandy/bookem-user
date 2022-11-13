import mongoose from 'mongoose';

// VolunteerLogSchema describes what our documents should look like in our VolunteerLogs collections
const VolunteerLogSchema = new mongoose.Schema({
  school: {type: String, required: true},
  teacher: {type: String, required: true},
  date: {type: Date, required: true},
  hours: {type: Number, required: true},
  userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
  feedback: {type: String, required: false}
});

export default mongoose.models.VolunteerLog ||
  mongoose.model('VolunteerLog', VolunteerLogSchema);
