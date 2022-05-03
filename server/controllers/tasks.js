const express = require('express');
const app = express.Router();

const taskModel = require('../models/task');
const CREATED_STATUS = 201;

app
    .get('/', (req, res, next) => {
        taskModel.getList()
            .then(tasks => {res.json({ success: true, errors: [], data: tasks })})
            .catch(next);
    })
    .get('/todo', (req, res, next) => {
        taskModel.getTodo(req.user.handle)
            .then(tasks => { res.json({ success: true, errors: [], data: tasks }) })
            .catch(next);
    })
    .get('/todo/:handle', (req, res, next) => {
        taskModel.getTodo(req.params.handle)
            .then(tasks => { res.json({ success: true, errors: [], data: tasks }) })
            .catch(next);
    })
    .get('/todo/myTasks/:handle', (req, res, next) => {
        console.log("MYTASK--APII"+req.params.handle)
        taskModel.getMyTasks(req.params.handle)
            .then(tasks => { res.json({ success: true, errors: [], data: tasks }) })
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        taskModel.get(req.params.id)
            .then(task => { res.json({ success: true, errors: [], data: task }) })
            .catch(next);
    })
    .post('/', (req, res, next) => {
        req.body.author = req.user.handle;
        taskModel.create(req.body)
            .then(task => { res.status(CREATED_STATUS).json({ success: true, errors: [], data: task }) })
            .catch(next);
    })
    .delete('/todo/myTasks/:id', (req, res, next) => {
        console.log("DELETE TASK-CONTROLLERS_" + req.params.id);
        taskModel.remove(req.params.id)
            .then(task => res.json ({ success: true, errors: [], data: task }))
            .catch(next);

    })
    .patch('/todo/myTasks/:id', (req, res, next) => {
        console.log("PATCH TASK-CONTROLLERS-" + req.params.id);
        taskModel.update(req.params.id, req.body)
            .then(task => { res.json({ success: true, errors: [], data: task }) })
            .catch(next);
    })

    .post('/seed', (req, res, next) => {
        taskModel.seed()
            .then(task => res.status(CREATED_STATUS).json({ success: true, errors: [], data: task }))
            .catch(next);
    })
module.exports = app;