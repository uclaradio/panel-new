import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import showRoutes from "./routes/shows.js";

const app = express();

app.use("/shows", showRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const USERNAME = "uclaradio";
const PASSWORD = "radioradioradio";

const CONNECTION_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.kbphjxi.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));
