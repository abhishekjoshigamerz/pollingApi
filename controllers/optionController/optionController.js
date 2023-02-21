const Question = require('../../models/question');
const Option = require('../../models/option');

//create option for a question
module.exports.createOption = async function(req, res){
    let questionId = req.params.id;
    let question = Question.findById(questionId);
    if(question){
        const id = question.Option.length + 1;
        let options = await Option.create({
            option_num: id,
            question: questionId,
            content: req.body.content,
            votes: 0,
            link: `${process.env.url}/api/v1/options/${id}/add_vote`
        });

    
        if(options){
            question.Options.push(options);
            question.save();
            options.save();   
            return res.json(200, {
                message: 'Option created successfully!',
                option: options
            }); 
        
        }

        return res.json(200, {
            message: 'Option created successfully!',
            option: option
        });
    }else{
        return res.json(400, {
            message: 'Option creation failed'
        });
    }

}