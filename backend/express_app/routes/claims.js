import express from 'express';

import { createClaim, getClaimByContractId, updateClaim, deleteClaim } from '../controllers/claims.js';

const router = express.Router();

router.post('/create', createClaim);
router.get('/:contractId', getClaimByContractId);
router.patch('/:id', updateClaim);
router.delete('/:id', deleteClaim);

export default router;