const Guest = require('../models/guest');

const service = {};

const buildRegex = (value) => {
  return `\\B${value}|${value}\\B|${value}`;
};

service.saveGuest = (guest) => {
  return new Guest(guest).save();
};

service.findById = (id) => {
  return Guest.findById(id);
};

service.update = (newDoc) => {
  let id = newDoc.id;
  delete newDoc.id;
  return Guest.update({_id: id}, newDoc);
};

service.findByFTS = (value) => {
  const regex = buildRegex(value);
  return Guest.find({
    $or: [
      { name: { $regex: regex, $options: "i" } },
      { surname: { $regex: regex, $options: "i" } }
    ]});
};

module.exports = service;
