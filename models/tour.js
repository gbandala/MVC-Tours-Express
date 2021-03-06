const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourModel = new Schema({
tourName: { type: String, required: true },
tourBlurb: { type: String, required: false},
tourBullets: { type: String, required: false},
tourPackage: { type: String, required: false},
tourRegion: { type: String, required: false},
tourDifficulty: { type: String, required: false},
tourDescription: { type: String, required: true},
tourLength: { type: Number, required: true},
tourPrice: { type: Number, required: true},
tourTags: [String],
tourOrganizer: {
    organizerName: { type: String, required: false},
    organizerPhone: { type: String, required: false}}
});

module.exports = mongoose.model('Tour', tourModel);