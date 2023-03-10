const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/questionController/questioncontroller');
const optionController = require('../../../controllers/optionController/optionController');
const validator = require('../../../middlewares/validator');
//home page
router.get('/',questionController.getAllQuestions);


//questions routes
router.post('/api/v1/questions/create',validator.questionValidator ,questionController.createQuestion);

router.get('/api/v1/questions/:id/delete',questionController.deleteQuestion);

router.get('/api/v1/questions/:id', questionController.getQuestion);

//options create
router.post('/api/v1/questions/:id/options/create', validator.optionValidator ,optionController.createOption);
//options delete
router.get('/api/v1/options/:id/delete',optionController.deleteOption);
//options add vote
router.get('/api/v1/options/:id/add_vote',optionController.addVote);

module.exports = router;