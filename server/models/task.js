
const req = require('express/lib/request');
const { db, ObjectId } = require('./mongo');
const userModel = require('./user');

const collection = db.db("diary").collection("tasks");

let highestId = 3;
  
const list = [
    {
        title: 'Do mid-term', 
        isDone: true, 
        author: 'jewpaltz', 
        assignedTo: 'shivi', 
        date: '2022-4-23',
        id:1
    },
    { 
        title: 'Add some more features', 
        isDone: true, 
        author: 'shivi', 
        assignedTo: 'putin',  
        date: '2022-4-20',
        id: 2
    },
    { 
        title: 'Connect DB', 
        isDone: false, 
        author: 'joebiden', 
        assignedTo: 'juli',  
        date: '2022-4-17',
        id: 3
    }             
];
const includeUser = async task => ({ ...task, user: await userModel.getByHandle(task.author) });
//const includeUsera = async task => ({ ...task, user: await userModel.getByHandle(task.assignedTo) });

async function get(id){
    const task = await collection.findOne({_id: new ObjectId(id)});
    if(!task){
        throw { status: 404, message: 'Task not found' };
    }
    return includeUser(task);
}

async function getMyTasks(handle){
    const taskss = await collection.find({ assignedTo: handle }).toArray();
    // console.log("FETCH MY TASKS"+ JSON.stringify(taskss));
    //console.log("sssssss------>"+taskss);
    return Promise.all( taskss.map(x=> includeUser(x) ) );

}

async function getTodo(handle){
    const tasks = await collection.find({ author: handle }).toArray();
    // console.log("getTodo called" + tasks)
    return Promise.all( tasks.map(x=> includeUser(x) ) );
}

async function getAll(handle){
    const tasks = await collection.find({}).toArray();
    // console.log("getTodoAll called" + tasks)
    return Promise.all( tasks.map(x=> includeUser(x)));
    
}



async function remove(id){
    const task = await collection.findOneAndDelete({ _id: new ObjectId(id)});
    return includeUser(task.value);
}

async function update(id, newTask){
    console.log("BEFORE ---->"+ JSON.stringify(newTask.isDone))
    
    newTask = await collection.findOneAndUpdate(
            { _id: new ObjectId(id)}, 
            [
            { $set: {isDone:{$eq:[false,"$isDone"]}}} 
            ],
            { returnDocument: 'after' });

            console.log("AFTER--->"+JSON.stringify(newTask.value.isDone));

    return includeUser(newTask.value);
}

function seed(){
    return collection.insertMany(list);
}

module.exports = {
    async create(task){
        task.id = ++highestId;

        const result = await collection.insertOne(task);
        task = await get(result.insertedId);

        return includeUser(task);
    },
    remove,
    update,
    async getList(){
        const tasks = await collection.find({}).toArray();

        return Promise.all( tasks.map(x => includeUser(x)));
    },
    getTodo,
    getMyTasks,
    seed,
    getAll
}
module.exports.get = get;