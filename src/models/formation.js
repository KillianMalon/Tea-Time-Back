import {model, Schema} from "mongoose";

const FormationSchema = new Schema(
    {
        titre_formation: { type: String, required: true },
        description_formation: { type: String, required: true },
        duree_formation: { type: String, required: true },
        image_formation: { type: String, required: true },
        lien_formation: { type: String, required: true },
        themes_formation: { 
            type: String, 
            enum: ["Définitions et concepts", "Intervention et posture", "Drague, harcèlement ou agression ?", "Accompagner et écouter"], 
            required: true 
        },
    }
);

export default model('Formtaion', FormationSchema);