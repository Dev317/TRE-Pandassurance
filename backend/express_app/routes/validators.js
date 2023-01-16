import express from 'express';

import { createValidator } from '../controllers/validators.js';

const router = express.Router();

router.post('/signup', createValidator);


export default router;