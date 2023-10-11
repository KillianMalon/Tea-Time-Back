import AuthService from "../services/auth";
import AuthValidator from "../validators/auth";
const AuthServiceInstance = new AuthService();
const AuthValidatorInstance = new AuthValidator();

export async function addQuizz(req, res) {
  const fields = req.body;
  await AuthValidatorInstance.validate(
    req.body,
    AuthValidatorInstance.addQuizz
  );
  const jwt = await AuthServiceInstance.addQuizz({ fields });
  res.status(200).json({ jwt });
}

export async function getQuizz(req, res) {
  const { id } = req.jwt.data;
  const user = await AuthServiceInstance.getQuizz({ id });
  res.status(200).json({ message: "Quizz récupéré", user });
}

export async function updateQuizz(req, res) {
  const { id } = req.jwt.data;
  const user = await AuthServiceInstance.updateQuizz({ id });
  res.status(200).json({ message: "Quizz modifié", user });
}

export async function deleteQuizz(req, res) {
  const { id } = req.jwt.data;
  const user = await AuthServiceInstance.deleteQuizz({ id });
  res.status(200).json({ message: "Quizz supprimé", user });
}

export async function getAllQuizz(req, res) {
  const { id } = req.jwt.data;
  const user = await AuthServiceInstance.getAllQuizz({ id });
  res.status(200).json({ message: "Quizz récupéré", user });
}

export async function addQuestion(req, res) {
  const fields = req.body;
  await AuthValidatorInstance.validate(
    req.body,
    AuthValidatorInstance.addQuestion
  );
  const jwt = await AuthServiceInstance.addQuestion({ fields });
  res.status(200).json({ jwt });
}

export async function getQuestion(req, res) {
  const { id } = req.jwt.data;
  const user = await AuthServiceInstance.getQuestion({ id });
  res.status(200).json({ message: "Question récupéré", user });
}