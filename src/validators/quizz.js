import Validator from "./validator.js";    
import Joi from "joi";

export default class QuizzValidator extends Validator {
    
        createQuizz = Joi.object({
            titre_quizz: Joi.string().required(),
            duree_quizz: Joi.string().required(),
            questions_quizz: Joi.array().required(),
            themes_quizz: Joi.string().required(),
        })
        
        updateQuizz = Joi.object({
            titre_quizz: Joi.string().required(),
            duree_quizz: Joi.string().required(),
            questions_quizz: Joi.array().required(),
            themes_quizz: Joi.string().required(),
        })

    }
    