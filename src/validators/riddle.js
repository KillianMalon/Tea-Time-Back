import Validator from "./validator.js";    
import Joi from "joi";

export default class RiddleValidator extends Validator {
    
        createRiddle = Joi.object({
            titre_riddle: Joi.string().required(),
            duree_riddle: Joi.string().required(),
            questions_riddle: Joi.array().required(),
            themes_riddle: Joi.string().required(),
        })
        
        updateRiddle = Joi.object({
            titre_riddle: Joi.string().required(),
            duree_riddle: Joi.string().required(),
            questions_riddle: Joi.array().required(),
            themes_riddle: Joi.string().required(),
        })

    }
    