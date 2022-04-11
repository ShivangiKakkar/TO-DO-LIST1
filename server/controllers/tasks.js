const express = require('express');
const app = express.Router();

const taskModel = require('../models/task');
const CREATED_STATUS = 201;

app
    .get('/', (req, res, next) => {
        taskModel.getList()
            .then(tasks => res.json({ success: true, errors: [], data: task }))
            .catch(next);
    })
    .get('/tasks/:handle', (req, res, next) => {
        taskModel.getTask(req.params.handle)
            .then(tasks => { res.json({ success: true, errors: [], data: task }) })
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        taskModel.get(req.params.id)
            .then(task => { res.json({ success: true, errors: [], data: task }) })
            .catch(next);
    })
    .post('/', (req, res, next) => {
        taskModel.create(req.body)
            .then(task => { res.status(CREATED_STATUS).json({ success: true, errors: [], data: task }) })
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        taskModel.remove(req.params.id)
            .then(task => { res.json(task) })
            .catch(next);

    })
    .patch('/:id', (req, res, next) => {
        taskModel.update(req.params.id, req.body)
            .then(task => { res.json({ success: true, errors: [], data: task }) })
            .catch(next);
    })
module.exports = app;