import express from 'express';
import contactsControllers from '../controllers/contactsControllers.js';
import { addContactSchema, updateContactSchema, updateContactStatusSchema } from '../schemas/contactsSchemas.js';
import validateBody from '../helpers/validateBody.js';
import isValidID from '../middlewares/isValidId.js';

const contactsRouter = express.Router();

contactsRouter.get('/', contactsControllers.getAll);
contactsRouter.post('/', validateBody(addContactSchema), contactsControllers.addContact);
contactsRouter.get('/:id', isValidID, contactsControllers.getById);
contactsRouter.put('/:id', isValidID, validateBody(updateContactSchema), contactsControllers.updateContact);
contactsRouter.delete('/:id', isValidID, contactsControllers.deleteContact);
contactsRouter.patch(
  '/:id/favorite',
  isValidID,
  validateBody(updateContactStatusSchema),
  contactsControllers.updateContactStatus
);

export default contactsRouter;