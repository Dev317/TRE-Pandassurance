import express from 'express';

import { createInstitution, getInstitutions, getInstitutionById, updateInstitution, deleteInstitution } from '../controllers/institutions.js';

const router = express.Router();

router.get('/', getInstitutions);
router.post('/signup', createInstitution);
router.get('/:id', getInstitutionById);
router.patch('/:id', updateInstitution);
router.delete('/:id', deleteInstitution);

export default router;
