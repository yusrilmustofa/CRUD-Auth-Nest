import * as mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, index: true },
    password: { type: String },
});