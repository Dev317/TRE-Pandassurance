import express from 'express';

import { createPolicy, getPolicyId, getInstitutionPolicy, updatePolicy, deletePolicy } from '../controllers/policies.js';

const router = express.Router();

router.post('/create', createPolicy);
router.get('/:id', getPolicyId);
router.get('/institution/:institutionId', getInstitutionPolicy);
router.patch('/:id', updatePolicy);
router.delete('/:id', deletePolicy);


export default router;