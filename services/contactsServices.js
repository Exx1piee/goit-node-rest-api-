import { Contact } from "../models/contactModel.js";
async function listContacts() {
  const data = await Contact.find();
  return data;
}
async function getContactById(id) {
  const result = await Contact.findById(id);
  return result;
}
async function updateById(id, data) {
  const result = await Contact.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
}
async function removeContact(id) {
  const result = await Contact.findByIdAndDelete(id);
  return result;
}
async function addContact(data) {
  const newContact = await Contact.create(data);
  return newContact;
}
async function updateContactFavoriteStatus(id, data) {
  const { favorite } = data;
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  return result;
}
export {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateById,
  updateContactFavoriteStatus,
};