import AccountMessage from "../models/accountMessage.js";

export const getAccounts = async (req, res) => {
    try {
        const accountMessages = await AccountMessage.find();

        res.status(200).json(accountMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAccount = async (req, res) => {
    const acct = req.body;
    const newAcct = new AccountMessage(acct);

    try {
        await newAcct.save();

        res.status(201).json(newAcct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}