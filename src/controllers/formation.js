import FormationService from "../services/formation.js";
import FormationValidator from "../validators/formation.js";
const FormationServiceInstance = new FormationService();
const FormationValidatorInstance = new FormationValidator();

export async function createFormation(req, res) {
  const fields = req.body;
  await FormationValidatorInstance.validate(fields, FormationValidatorInstance.createFormation);
  const formation = await FormationServiceInstance.createFormation({ fields });
  res.status(200).json({ message: "Formation ajouté", formation });
}

export async function getFormationByTitle(req, res) {
  const  title  = req.body.title;
  const formation = await FormationServiceInstance.getFormationByTitle(title);
  res.status(200).json({ message: "Formation récupéré", formation });
}

export async function updateFormation(req, res) {
  const oldTitle = req.body.oldTitle;
  const fields = req.body;
  delete fields.oldTitle;
  await FormationValidatorInstance.validate(fields, FormationValidatorInstance.updateFormation);
  const formation = await FormationServiceInstance.updateFormation({ fields, oldTitle });
  res.status(200).json({ message: "Formation modifié", formation });
}

export async function deleteFormation(req, res) {
  const  title  = req.body.title;
  await FormationServiceInstance.deleteFormation({ title });
  res.status(200).json({ message: "Formation supprimé" });
}

export async function getAllFormation(req, res) {
  const { id } = req.jwt.data;
  const formations = await FormationServiceInstance.getAllFormation({ id });
  res.status(200).json({ message: "Formations récupérées", formations });
}

export async function getFormationsByTheme(req, res) {
  const theme = req.body.theme;
  const formations = await FormationServiceInstance.getFormationsByTheme({ theme });
  res.status(200).json({ message: "Formations récupérées", formations });
}