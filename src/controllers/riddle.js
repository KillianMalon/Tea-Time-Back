import RiddleService from "../services/riddle.js";
import RiddleValidator from "../validators/riddle.js";
const RiddleServiceInstance = new RiddleService();
const RiddleValidatorInstance = new RiddleValidator();

export async function createRiddle(req, res) {
  const fields = req.body;
  await RiddleValidatorInstance.validate( req.body, RiddleValidatorInstance.createRiddle);
  const riddle = await RiddleServiceInstance.createRiddle({ fields });
  res.status(200).json({ message: "Énigme ajouté", riddle });
}

export async function getRiddleByTitle(req, res) {
  const  title  = req.body.title;
  const riddle = await RiddleServiceInstance.getRiddleByTitle(title);
  res.status(200).json({ message: "Énigme récupéré", riddle });
}

export async function updateRiddle(req, res) {
  const oldTitle = req.body.oldTitle;
  const fields = req.body;
  delete fields.oldTitle;
  await RiddleValidatorInstance.validate(fields, RiddleValidatorInstance.updateRiddle);
  const riddle = await RiddleServiceInstance.updateRiddle({ fields, oldTitle });
  res.status(200).json({ message: "Énigme modifié", riddle });
}

export async function deleteRiddle(req, res) {
  const  title  = req.body.title;
  await RiddleServiceInstance.deleteRiddle({ title });
  res.status(200).json({ message: "Énigme supprimé"});
}

export async function getAllRiddle(req, res) {
  const { id } = req.jwt.data;
  const riddles = await RiddleServiceInstance.getAllRiddle({ id });
  res.status(200).json({ message: "Énigmes récupérés", riddles });
}

export async function getRiddleByTheme(req, res) {
    const  theme  = req.body.theme;
    const riddles = await RiddleServiceInstance.getRiddleByTheme(theme);
    res.status(200).json({ message: "Énigmes récupérés", riddles });
}

