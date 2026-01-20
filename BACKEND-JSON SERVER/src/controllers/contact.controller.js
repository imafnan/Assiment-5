const contactModel = require('../models/contact.model')

const createContact = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "contact ditailes is required" });
        }

        const contact = await contactModel.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
        });

        res.status(201).json({ success: true, contact });
    }
    catch (err) {
        console.error(err)
        res.status(500).json({ message: "Create food failed" });
    }


}

const getContactIteam = async (req, res) => {
    const contactIteam = await contactModel.find({})
    res.status(200).json({
        message: 'Contact Iteam Fached sucsessfully',
        contactIteam
    })
}

const getContactIteamOne = async (req, res) => {
    const contactID = req.params.id;
    const contactIteam = await contactModel.findOne({ _id: contactID })
    res.status(200).json({
        message: 'Contact Iteam Fached sucsessfully',
        contactIteam
    })
}

const deleteContact = async (req, res) => {

    try {
        const contactId = req.body._id;
        await contactModel.findByIdAndDelete(contactId);
        res.status(200).json({ message: "Contact deleted successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Delete contact failed" });
    }
}

const updateContact = async (req, res) => {
    console.log(req.body);
    
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Contact ID is required" });
        }

        const contact = await contactModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({
            success: true,
            contact
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Update contact failed" });
    }
};


module.exports = { createContact, getContactIteam, deleteContact, getContactIteamOne, updateContact }