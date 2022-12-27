import ShowMessage from "../models/showMessage.js";

export const getShows = async (req, res) => {
    try {
        const showMessages = await ShowMessage.find();

        res.status(200).json(showMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createShow = async (req, res) => {
    const show = req.body;
    const newShow = new ShowMessage(show);

    try {
        await newShow.save();

        res.status(201).json(newShow);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}