import {model, Schema} from "mongoose";

const QuizzSchema = new Schema({
    titre_quizz: { type: String, required: true },
    duree_quizz: { type: String, required: true },
    questions_quizz: [{
      title: {
        type: String,
        required: true
      },
      answers: {
        type: [String],
        required: true
      },
      correctAnswer: {
        type: Number,
        required: true
      }
    }], // Champs pour les questions du quizz
    themes_quizz: { 
      type: String, 
      enum: ["Définitions et concepts", "Intervention et posture", "Drague, harcèlement ou agression ?", "Accompagner et écouter"], 
      required: true 
    },
});

export default model('Quizz', QuizzSchema);

