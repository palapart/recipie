// models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String },
    ingredients: [{ type: String }],
    instructions: { type: String },
    prep_time: { type: Number },
    cook_time: { type: Number },
    servings: { type: Number }
});

module.exports = mongoose.model('Recipe', recipeSchema);
