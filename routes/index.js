const express = require('express');
const router = express.Router();
const ClassSurveyModel = require('../models/ClassSurveyModel');

router.get('/', async (request, response) => {
    const topicData = await ClassSurveyModel.getAllTopicData();
    
    response.render('template', {
        locals: {
            title: 'Class Survey',
            data: topicData
        },
        partials: {
            body: 'partials/home'
        }
    });
});

module.exports = router;