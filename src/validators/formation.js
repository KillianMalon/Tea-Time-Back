import Validator from "./validator.js";
import Joi from "joi";

export default class FormationValidator extends Validator {

    createFormation = Joi.object({
        titre_formation: Joi.string().required(),
        description_formation: Joi.string().required(),
        duree_formation: Joi.string().required(),
        image_formation: Joi.string().required(),
        lien_formation: Joi.string().required(),
        themes_formation: Joi.string().required(),
    })
    
    updateFormation = Joi.object({
        titre_formation: Joi.string().required(),
        description_formation: Joi.string().required(),
        duree_formation: Joi.string().required(),
        image_formation: Joi.string().required(),
        lien_formation: Joi.string().required(),
        themes_formation: Joi.string().required(),
    })
}
