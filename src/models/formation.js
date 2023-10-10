const Mongoose = require("mongoose");

const schema = new Mongoose.Schema(
    {
        titre: { type: String, required: true },
        description: { type: String, required: true },
        date: { type: String, required: true },
        heure: { type: String, required: true },
        duree: { type: String, required: true },
        module: { type: String, required: true },
    }
);