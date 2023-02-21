const Question = require('../../models/question');
const Option = require('../../models/option');
const dotenv = require('dotenv');
dotenv.config();
//create option for a question
module.exports.createOption = async function(req, res){
    let questionId = req.params.id;
    let question = await Question.findById(questionId);

    
    if(question){
        const id = question.options.length + 1;
        console.log(question);

        let option = await Option.create({
            option_num: id,
            question: questionId,
            content: req.body.content,
            votes: 0,
            link: `${process.env.url}/api/v1/options/${id}/add_vote`
        });

        let optionsSave = await option.save();
        if(optionsSave){
            question.options.push(option);
            question.save();
            return res.json(200, {
                message: 'Option created successfully!',
                option: option    
            });
        }else{
            return res.json(400, {
                message: 'Option creation failed'
            });
        }

        
    }else{
        return res.json(400, {
            message: 'Option creation failed'
        });
    }

}