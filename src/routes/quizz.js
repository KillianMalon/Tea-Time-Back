import express from 'express';
import * as quizz from '../controllers/quizz.js';
import * as jwt from '../middlewares/jwt.js';

const router = express.Router();

router.post('/addQuizz', jwt.verify, quizz.addQuizz);
router.get('/getQuizz', jwt.verify, quizz.getQuizz);
router.put('/updateQuizz', jwt.verify, quizz.updateQuizz);
router.delete('/deleteQuizz', jwt.verify, quizz.deleteQuizz);
router.get('/getAllQuizz', jwt.verify, quizz.getAllQuizz);