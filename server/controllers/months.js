
const express = require('express');
const app = express.Router();

const monthModel = require('../models/month');
const CREATED_STATUS = 201;

app
    .get('/', (req, res, next) => {
        monthModel.getList()
            .then(months => res.json({ success: true, errors: [], data: months }))
            .catch(next);
    })
    .get('/calendar', (req, res, next) => {
        monthModel.getCalendar(req.user.handle)
            .then(months => { res.json({ success: true, errors: [], data: months }) })
            .catch(next);
    })
    .get('/calendar/:handle', (req, res, next) => {
        monthModel.getCalendar(req.params.handle)
            .then(months => { res.json({ success: true, errors: [], data: months }) })
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        monthModel.get(req.params.id)
            .then(month => { res.json({ success: true, errors: [], data: month }) })
            .catch(next);
    })
    .post('/', (req, res, next) => {
        //console.log("In the Controller -- POST req")
        req.body.designer = req.user.handle;
        monthModel.create(req.body)
            .then(month => { res.status(CREATED_STATUS).json({ success: true, errors: [], data: month }) })
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        monthModel.remove(req.params.id)
            .then(month => res.json({ success: true, errors: [], data: month }))
            .catch(next);

    })
    .patch('/:id', (req, res, next) => {
        monthModel.update(req.params.id, req.body)
            .then(month => { res.json({ success: true, errors: [], data: month }) })
            .catch(next);

    })
    .post('/seed', (req, res, next) => {
        monthModel.seed()
            .then(month => res.status(CREATED_STATUS).json({ success: true, errors: [], data: month }))
            .catch(next);
    })

module.exports = app;