import express from 'express';
import * as quizz from '../controllers/quizz.js';
import * as jwt from '../middlewares/jwt.js';

const router = express.Router();

router.post('/createQuizz', jwt.verify, quizz.createQuizz);
router.get('/getQuizz', jwt.verify, quizz.getQuizzByTitle);
router.put('/updateQuizz', jwt.verify, quizz.updateQuizz);
router.delete('/deleteQuizz', jwt.verify, quizz.deleteQuizz);
router.get('/getAllQuizz', jwt.verify, quizz.getAllQuizz);

export default router;