import express from 'express';

import { createClaim } from '../controllers/claims.js';

const router = express.Router();

router.post('/create', createClaim);


export default router;