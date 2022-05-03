const express = require('express');
const app = express.Router();

const noteModel = require('../models/note');
const CREATED_STATUS = 201;

app
    .get('/', (req, res, next) => {
        noteModel.getList()
            .then(notes => {res.json({ success: true, errors: [], data: notes })})
            .catch(next);
    })
    .get('/todo', (req, res, next) => {
        noteModel.getTodo(req.user.handle)
            .then(notes => { res.json({ success: true, errors: [], data: notes }) })
            .catch(next);
    })
    .get('/todo/:handle', (req, res, next) => {
        noteModel.getTodo(req.params.handle)
            .then(notes => { res.json({ success: true, errors: [], data: notes }) })
            .catch(next);
    })
    .get('/:id', (req, res, next) => {
        noteModel.get(req.params.id)
            .then(note => { res.json({ success: true, errors: [], data: note }) })
            .catch(next);
    })
    .post('/', (req, res, next) => {
        req.body.creater = req.user.handle;
        noteModel.create(req.body)
            .then(note => { res.status(CREATED_STATUS).json({ success: true, errors: [], data: note }) })
            .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        console.log("DELETE USER-COPNTROLLERS_" + req.params.id);
        noteModel.remove(req.params.id)
            .then(note => res.json ({ success: true, errors: [], data: note }))
            .catch(next);

    })
    .patch('/:id', (req, res, next) => {
        noteModel.update(req.params.id, req.body)
            .then(note => { res.json({ success: true, errors: [], data: note }) })
            .catch(next);
    })

    .post('/seed', (req, res, next) => {
        noteModel.seed()
            .then(note => res.status(CREATED_STATUS).json({ success: true, errors: [], data: note }))
            .catch(next);
    })
module.exports = app;