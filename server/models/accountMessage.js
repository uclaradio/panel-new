import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    name: String,
    email: String,
    password: String,
    dj_name: String,
    profile_picture: String,
    departments: [String],
    roles: [String],
    bio: String
});

const AccountMessage = mongoose.model("AccountMessage", accountSchema);

export default AccountMessage;