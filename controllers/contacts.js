const contacts = require('../data/contacts');

const list = (req, res) => res.json(contacts);

const show = (req, res) => {
    const contactFound = contacts.find((contact) => contact._id === parseInt(req.params.id));
};

let contactCounter = contacts.length;

const create = (req, res) => {
    let newContact = {
        _id: contactCounter + 1,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    };
    contacts.push(newContact);
    res.json(contacts);
};

module.exports = { list, show, create };