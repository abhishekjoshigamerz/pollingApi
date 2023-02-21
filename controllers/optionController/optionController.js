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

//delete option
module.exports.deleteOption = async function(req, res){
    let optionID = req.params.id;
    const option = await Option.findById(optionID);
    if(option){
            let questionID = option.question;
            console.log(`question id is ${questionID}`);

            const deleteValue = await Question.updateOne({_id: questionID}, {$pull: {options: optionID}});   
            if(deleteValue){
                await Option.deleteOne({_id: optionID});

                return res.json(200, {
                    message: 'Option deleted successfully!'
                });
            }else{
                return res.json(400, {
                    message: 'Option deletion failed'
                });
            }
        }else{
            return res.json(400, {
                message: 'Option Id does not  exists'
            });
        }

}

// add vote to option
module.exports.addVote = async function(req, res){
    let optionID = req.params.id;
    let option = await Option.findById(optionID);
    const addVote = await Option.updateOne({_id: optionID}, {$inc: {votes: 1}});
    if(addVote && option){
        let questionID = option.question;
        const question = await Question.updateOne({_id: questionID}, {$set: {vote:true}});
        if(question){
            return res.json(200, {
                message: 'Vote added successfully!'
            });
        }else{
            return res.json(400, {
                message: 'Vote addition failed'
            });
        }
        
    }else{
        return res.json(400, {
            message: 'Vote addition failed'
        });
    }
}

