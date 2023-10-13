import express from 'express';
import * as riddle from '../controllers/riddle.js';
import * as jwt from '../middlewares/jwt.js';

const router = express.Router();

router.post('/createRiddle', jwt.verify, riddle.createRiddle);
router.get('/getRiddle', jwt.verify, riddle.getRiddleByTitle);
router.put('/updateRiddle', jwt.verify, riddle.updateRiddle);
router.delete('/deleteRiddle', jwt.verify, riddle.deleteRiddle);
router.get('/getAllRiddle', jwt.verify, riddle.getAllRiddle);
router.get('/getRiddleByTheme', jwt.verify, riddle.getRiddleByTheme);

export default router;
