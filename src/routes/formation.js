import express from 'express';
import * as formation from '../controllers/formation.js';
import * as jwt from '../middlewares/jwt.js';

const router = express.Router();

router.post('/createFormation', jwt.verify, formation.createFormation);
router.get('/getFormationByTitle', jwt.verify, formation.getFormationByTitle);
router.put('/updateFormation', jwt.verify, formation.updateFormation);
router.delete('/deleteFormation', jwt.verify, formation.deleteFormation);
router.get('/getAllFormation', jwt.verify, formation.getAllFormation);
router.get('/getFormationByTheme', jwt.verify, formation.getFormationsByTheme);

export default router;
