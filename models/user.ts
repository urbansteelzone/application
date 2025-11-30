import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  phone: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  phoneVerified: { type: Boolean, default: false },
  interestedItems: { type: [String], default: [] },
})

export const User = mongoose.model('User', UserSchema)
