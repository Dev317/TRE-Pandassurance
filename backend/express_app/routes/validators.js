import express from 'express';

import { createValidator, getValidators, getValidatorById, updateValidator, deleteValidator } from '../controllers/validators.js';

const router = express.Router();

router.get('/', getValidators);
router.post('/signup', createValidator);
router.get('/:id', getValidatorById);
router.patch('/:id', updateValidator);
router.delete('/:id', deleteValidator);


export default router;