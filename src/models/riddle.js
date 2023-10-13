import {model, Schema} from "mongoose";

const RiddleSchema = new Schema({
    titre_riddle: { type: String, required: true },
    duree_riddle: { type: String, required: true },
    questions_riddle: [{
      description:{
        type: String,
        required: true
      },
      question: {
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
      },
      details_reponse: { 
        type: String, 
        required: true 
    },
    }], // Champs pour les questions du riddle
    themes_riddle: { 
      type: String, 
      enum: ["L'employée harcelée…", "Les courriels malvenus", "La réunion gênante"], 
      required: true 
    },
    
});

export default model('Riddle', RiddleSchema);

