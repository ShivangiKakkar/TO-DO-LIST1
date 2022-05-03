const { db, ObjectId } = require('./mongo');
const userModel = require('./user');

const collection = db.db("diary").collection("notes");

let highestId = 4;

const list = [
    {
    creater: 'shivi',
    title: 'Milk',
    id: 1
},
{
    creater: 'joebiden',
    title: 'coffee',
    id: 1
},
{
    creater: 'juli',
    title: 'sugar',
    id: 1
},
{
    creater: 'shiv',
    title: 'eggs',
    id: 1
}
    
];

const includeUser = async note => ({ ...note, user: await userModel.getByHandle(note.creater) });

async function get(id){
    const note = await collection.findOne({_id: new ObjectId(id)});
    if(!note){
        throw { status: 404, message: 'Note not found' };
    }
    return includeUser(note);
}

async function getTodo(handle){
    const notes = await collection.find({ creater: handle }).toArray();

    return Promise.all( notes.map(x=> includeUser(x) ) );
}

async function remove(id){
    const note = await collection.findOneAndDelete({ _id: new ObjectId(id)});
    console.log("DELETE USER" + note.value)
    return includeUser(note.value);
}

async function update(id, newNote){
    newNote = await collection.findOneAndUpdate(
        { _id: new ObjectId(id)}, 
        { $set: newNote }, 
        { returnDocument: 'after' });
    return includeUser(newNote);
}
function seed(){
    return collection.insertMany(list);
}

module.exports = {
    async create(note){
        note.id = ++highestId;

        const result = await collection.insertOne(note);
        note = await get(result.insertedId);

        return includeUser(note);
    },
    remove,
    update,
    async getList(){
        const notes = await collection.find({}).toArray();

        return Promise.all( notes.map(x => includeUser(x)));
    },
    getTodo,
    seed,
}
module.exports.get = get;