import QuizzService from "../services/quizz.js";
import QuizzValidator from "../validators/quizz.js";
const QuizzServiceInstance = new QuizzService();
const QuizzValidatorInstance = new QuizzValidator();

export async function createQuizz(req, res) {
  const fields = req.body;
  await QuizzValidatorInstance.validate( req.body, QuizzValidatorInstance.createQuizz);
  const quizz = await QuizzServiceInstance.createQuizz({ fields });
  res.status(200).json({ message: "Quizz ajouté", quizz });
}

export async function getQuizzByTitle(req, res) {
  const  title  = req.body.title;
  const quizz = await QuizzServiceInstance.getQuizzByTitle(title);
  res.status(200).json({ message: "Quizz récupéré", quizz });
}

export async function updateQuizz(req, res) {
  const oldTitle = req.body.oldTitle;
  const fields = req.body;
  delete fields.oldTitle;
  await QuizzValidatorInstance.validate(fields, QuizzValidatorInstance.updateQuizz);
  const quizz = await QuizzServiceInstance.updateQuizz({ fields, oldTitle });
  res.status(200).json({ message: "Quizz modifié", quizz });
}

export async function deleteQuizz(req, res) {
  const  title  = req.body.title;
  await QuizzServiceInstance.deleteQuizz({ title });
  res.status(200).json({ message: "Quizz supprimé"});
}

export async function getAllQuizz(req, res) {
  const { id } = req.jwt.data;
  const quizzs = await QuizzServiceInstance.getAllQuizz({ id });
  res.status(200).json({ message: "Quizz récupérés", quizzs });
}

