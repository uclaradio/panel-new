import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    name: String,
    dj_name: String,
    email: String,
    password: String
});

const AccountMessage = mongoose.model("AccountMessage", accountSchema);

export default AccountMessage;