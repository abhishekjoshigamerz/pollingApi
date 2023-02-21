const express = require('express');
const router = express.Router();
const questionController = require('../../../controllers/questionController/questioncontroller');
const optionController = require('../../../controllers/optionController/optionController');
router.get('/',questionController.getAllQuestions);

router.post('/api/v1/questions/create',questionController.createQuestion);

router.get('/api/v1/questions/:id/delete',questionController.deleteQuestion);

router.get('/api/v1/questions/:id', questionController.getQuestion);

//options create
router.post('/api/v1/questions/:id/options/create',optionController.createOption);
//options delete
router.get('/api/v1/options/:id/delete',optionController.deleteOption);
//options add vote
router.get('/api/v1/options/:id/add_vote',optionController.addVote);

module.exports = router;