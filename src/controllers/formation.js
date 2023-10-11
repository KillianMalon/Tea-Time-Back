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
  console.log(title);
  const formation = await FormationServiceInstance.getFormationByTitle(title);
  res.status(200).json({ message: "Formation récupéré", formation });
}

export async function updateFormation(req, res) {
  const { id } = req.jwt.data;
  const formation = await FormationServiceInstance.updateFormation({ id });
  res.status(200).json({ message: "Formation modifié", formation });
}

export async function deleteFormation(req, res) {
  const { id } = req.jwt.data;
  const formation = await FormationServiceInstance.deleteFormation({ id });
  res.status(200).json({ message: "Formation supprimé" });
}

export async function getAllFormation(req, res) {
  const { id } = req.jwt.data;
  const formations = await FormationServiceInstance.getAllFormation({ id });
  res.status(200).json({ message: "Formation récupéré", formations });
}