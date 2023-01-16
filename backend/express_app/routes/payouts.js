import express from 'express';

import { createPayout } from '../controllers/payouts.js';

const router = express.Router();

router.post('/create', createPayout);


export default router;