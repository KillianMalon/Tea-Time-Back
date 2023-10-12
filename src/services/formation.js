import FormationModel from '../models/formation.js';
import { Conflict, NotFound } from '../globals/errors.js';

export default class FormationService {
    constructor() {
        if (FormationService.instance instanceof FormationService) {
            return FormationService.instance;
        }
        Object.freeze(this);
        FormationService.instance = this;
    }

    async createFormation({ fields }) {
        const formationExist = await FormationModel.findOne({ titre_formation: fields.titre_formation });
        if (formationExist) {
            throw new Conflict('Formation déjà existante.');
        }
        const formation = await FormationModel.create({ ...fields });
        return formation;
    }

    async getFormationByTitle( title ) {
        const formation = await FormationModel.findOne({ titre_formation: title });
        if (!formation) {
            throw new NotFound('Formation introuvable.');
        }
        return formation;
    }

    async updateFormation({ fields, oldTitle }) {
        const formation = await FormationModel.findOne({ titre_formation: oldTitle });
        if (!formation) {
            throw new NotFound('Formation introuvable.');
        }else{
            const updateFormation = await FormationModel.findByIdAndUpdate(formation._id, {... fields})
            return updateFormation;
        }
    }
    
    async deleteFormation({ title }) {
        const formation = await FormationModel.findOne({ titre_formation: title });
        console.log(formation);
        await FormationModel.findByIdAndDelete({ _id: formation._id });
        if (!formation) {
            throw new NotFound('Formation introuvable.');
        }
        return formation;
    }

    async getAllFormation() {
        const formations = await FormationModel.find();
        return formations;
    }

    async getFormationsByTheme({ theme }) {
        const formations = await FormationModel.find({ themes_formation: theme });
        return formations;
    }

}