// const { db, isConnected, ObjectId } = require("./mongo");
// const userModel = require('./user');
// const collection = db.db("diary").collection("notes");

// async function addNotes(note, user) {
//   //Here i update the logged in user's sentMessages array
//   const sessionAddNotes = await collection.findOneAndUpdate(
//     { username: user.username },
//     { $push: { notes: note } }
//   );



// const { db, ObjectId } = require('./mongo');
// const userModel = require('./user');

// const collection = db.db("diary").collection("notes");

// let highestId = 4;

// const list = [
//     {
//     creater: 'shivi',
//     title: 'Milk',
//     id: 1
// },
// {
//     creater: 'joebiden',
//     title: 'coffee',
//     id: 1
// },
// {
//     creater: 'juli',
//     title: 'sugar',
//     id: 1
// },{
//     creater: 'shiv',
//     title: 'eggs',
//     id: 1
// }
    
// ];