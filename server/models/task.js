
// const { db, ObjectId } = require('./mongo');
// const userModel = require('./user');

// const collection = db.db("diary").collection("tasks");

// let highestId = 3;

// const list = [
//     {
//         title: 'Do mid-term', 
//         isDone: true, 
//         author: 'jewpaltz', 
//         assignedTo: 'shivi', 
//         date: '',
//         id:1
//     },
//     { 
//         title: 'Add some more features', 
//         isDone: true, 
//         author: 'shivi', 
//         assignedTo: 'putin',  
//         date: '',
//         id: 2
//     },
//     { 
//         title: 'Connect DB', 
//         isDone: false, 
//         author: 'joebiden', 
//         assignedTo: 'juli',  
//         date: '',
//         id: 3
//     }             
// ];
// const includeUser = async task => ({ ...task, user: await userModel.getByHandle(task.author) });

// async function get(id){
//     const task = await collection.findOne({_id: new ObjectId(id)});
//     if(!task){
//         throw { status: 404, message: 'Task not found' };
//     }
//     return includeUser(task);
// }

// async function getTodo(handle){
//     const tasks = await collection.find({ author: handle }).toArray();

//     return Promise.all( tasks.map(x=> includeUser(x) ) );
// }

// async function remove(id){
//     const task = await collection.findOneAndDelete({ _id: new ObjectId(id)});
    
//     return includeUser(task.value);
// }

// async function update(id, newTask){
//     newTask = await collection.findOneAndUpdate(
//         { _id: new ObjectId(id)}, 
//         { $set: newTask }, 
//         { returnDocument: 'after' });
//     return includeUser(newTask);
// }
// function seed(){
//     return collection.insertMany(list);
// }

// module.exports = {
//     async create(task){
//         task.id = ++highestId;

//         const result = await collection.insertOne(task);
//         task = await get(result.insertedId);

//         return includeUser(task);
//     },
//     remove,
//     update,
//     async getList(){
//         const tasks = await collection.find({}).toArray();

//         return Promise.all( tasks.map(x => includeUser(x)));
//     },
//     getTodo,
//     seed,
// }
// module.exports.get = get;