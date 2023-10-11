import {Collection, model, Schema} from "mongoose";

const QuizzSchema = new Schema(
    {
        titre_quizz: { type: String, required: true },
        duree_quizz: { type: String, required: true },
        image_quizz: { type: String, required: true },
        questions_quizz: { type: String, required: true },
        réponses_quizz: { 
            type: Array[Array[{"reponses": String, "good_response" :Boolean}]], 
            required: true 
        },
        test: {type: Programmer, required: true},
        themes_quizz: { 
            type: String, 
            enum: ["Définitions et concepts", "Intervention et posture", "Drague, harcèlement ou agression ?", "Accompagner et écouter"], 
            required: true 
        },
    }
);

export default model('Quizz', QuizzSchema);