import mongoose from 'mongoose';

// VolunteerApplicationSchema describes what our documents should look like in our VolunteerApplication collections
const VolunteerApplicationSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    isApproved: { type: Boolean, default: false, required: true },
    emergencyContact: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: { type: String, required: true },
      relationship: { type: String, required: true },
    },
    workStatus: { type: String, required: false },
    employer: { type: String, required: false },
    //   trackHours: {type: Boolean, default: false, required: true}
    opportunities: [{ type: String, required: false }],
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'volunteerApplications',
  }
);

export default mongoose.models.VolunteerApplication ||
  mongoose.model('VolunteerApplication', VolunteerApplicationSchema);
