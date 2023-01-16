import express from 'express';

import { createInstitution } from '../controllers/institutions.js';

const router = express.Router();

router.post('/signup', createInstitution);


export default router;
