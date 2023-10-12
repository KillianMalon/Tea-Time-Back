import RiddleModel from "../models/riddle.js";
import { Conflict, NotFound } from "../globals/errors.js";

export default class RiddleService {
    constructor() {
        if (RiddleService.instance instanceof RiddleService) {
            return RiddleService.instance;
        }
        Object.freeze(this);
        RiddleService.instance = this;
    }

    async createRiddle({ fields }) {
        const riddleExist = await RiddleModel.findOne({ titre_riddle: fields.titre_riddle});
        if (riddleExist) {
            throw new Conflict("Énigme déjà existant.");
        }
        const riddle = await RiddleModel.create({ ...fields });
        return riddle;
    }

    async getRiddleByTitle(title) {
        const riddle = await RiddleModel.findOne({ titre_riddle: title });
        if (!riddle) {
            throw new NotFound("Énigme introuvable.");
        }
        return riddle;
    }

    async updateRiddle({ fields, oldTitle }) {
        const riddle = await RiddleModel.findOne({ titre_riddle: oldTitle });
        if (!riddle) {
            throw new NotFound("Énigme introuvable.");
        }else{
            const updateRiddle = await RiddleModel.findByIdAndUpdate(riddle._id, {... fields})
            return updateRiddle;
        }
    }

    async deleteRiddle({ title }) {
        const riddle = await RiddleModel.findOne({ titre_riddle: title });
        await RiddleModel.findByIdAndDelete({ _id: riddle._id });
        if (!riddle) {
            throw new NotFound("Énigme introuvable.");
        }
        return riddle;
    }

    async getAllRiddle() {
        const riddle = await RiddleModel.find();
        return riddle;
    }   
}