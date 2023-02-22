const {body} = require('express-validator');

module.exports.questionValidator = [
    body('title').notEmpty().withMessage('Title is required'),
];

module.exports.optionValidator = [
    body('content').notEmpty().withMessage('Content is required'),
];