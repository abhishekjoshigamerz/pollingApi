const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
   option_num:{
         type:Number,
        required:true
   },
   question:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required:true
   },
   content:{
        type:String,

   },
   votes:{
        type:Number,
   },
   link:{
        type:String,
   }

},{
    timestamps: true
});

const Option = mongoose.model('Option', optionSchema);
module.exports = Option;
