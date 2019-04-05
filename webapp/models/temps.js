var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tempsSchema = new Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    temperature: {
        type: String
    },
    room: {
        type: String,
        default: '1'
    }
});


module.exports = mongoose.model('Temps', tempsSchema);