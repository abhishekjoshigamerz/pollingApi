const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    vote:{
        type:Boolean,
        default:false
    },
    options:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]
},{
    timestamps: true
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;