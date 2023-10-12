import QuizzModel from "../models/quizz.js";
import { Conflict, NotFound } from "../globals/errors.js";

export default class QuizzService {
    constructor() {
        if (QuizzService.instance instanceof QuizzService) {
            return QuizzService.instance;
        }
        Object.freeze(this);
        QuizzService.instance = this;
    }

    async createQuizz({ fields }) {
        const quizzExist = await QuizzModel.findOne({ titre_quizz: fields.titre_quizz });
        if (quizzExist) {
            throw new Conflict("Quizz déjà existant.");
        }
        const quizz = await QuizzModel.create({ ...fields });
        return quizz;
    }

    async getQuizzByTitle(title) {
        const quizz = await QuizzModel.findOne({ titre_quizz: title });
        if (!quizz) {
            throw new NotFound("Quizz introuvable.");
        }
        return quizz;
    }

    async updateQuizz({ fields, oldTitle }) {
        const quizz = await QuizzModel.findOne({ titre_quizz: oldTitle });
        if (!quizz) {
            throw new NotFound("Quizz introuvable.");
        }else{
            const updateQuizz = await QuizzModel.findByIdAndUpdate(quizz._id, {... fields})
            return updateQuizz;
        }
    }

    async deleteQuizz({ title }) {
        const quizz = await QuizzModel.findOne({ titre_quizz: title });
        await QuizzModel.findByIdAndDelete({ _id: quizz._id });
        if (!quizz) {
            throw new NotFound("Quizz introuvable.");
        }
        return quizz;
    }

    async getAllQuizz() {
        const quizz = await QuizzModel.find();
        return quizz;
    }   
}