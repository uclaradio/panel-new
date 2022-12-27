import mongoose, { Schema } from "mongoose";

const showSchema = new Schema({
    title: String,
    description: String,
    graphic: String,
    hosts: [String],
    day: String,
    time: Number,
    genres: [String],
    instagram: String,
    spotify: String
});

const ShowMessage = mongoose.model("ShowMessage", showSchema);

export default ShowMessage;