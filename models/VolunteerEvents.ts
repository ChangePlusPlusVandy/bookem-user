import mongoose from 'mongoose';

// VolunteerEventSchema describes what our documents should look like in our VolunteerEvents collections
const VolunteerEventSchema = new mongoose.Schema({
  // add schema here
});

export default mongoose.models.VolunteerEvent ||
  mongoose.model('VolunteerEvent', VolunteerEventSchema);
