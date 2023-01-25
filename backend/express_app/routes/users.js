import express from 'express';

import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/signup', createUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


export default router;
