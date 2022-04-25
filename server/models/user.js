
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db, isConnected, ObjectId } = require('./mongo');

const collection = db.db("diary").collection("users");

let highestId = 5;
console.log(isConnected);
const list = [
    {
        firstname: 'Moshe',
        lastname: 'Plotkin',
        handle: 'jewpaltz',
        password: 'vitaminwater',
        email: 'mosheplotkin@gmail.com',
        pic:'https://randomuser.me/api/portraits/men/76.jpg',
        id: 1,
    },
    {
        firstname: 'Shivangi',
        lastname: 'Kakkar',
        handle: 'shivi',
        password: 'cof',
        email: 'shiv@gmail.com',
        pic: 'https://randomuser.me/api/portraits/women/21.jpg',
        id: 2,
    },
    {
        firstname: 'Vladimir',
        lastname: 'Putin',
        handle: 'putin',
        password: 'longtable',
        email: 'vladimirputin@gmail.com',
        pic:'https://randomuser.me/api/portraits/men/8.jpg',
        id: 3,
    },
    {
        firstname: 'Joe',
        lastname: 'Biden',
        handle: 'joebiden',
        password: 'birdsinging',
        email: 'joebiden@gmail.com',
        pic:'https://randomuser.me/api/portraits/men/76.jpg',
        id: 4,
    },
    {
        firstname: 'Juli',
        lastname: 'Han',
        handle: 'juli',
        password: 'hello',
        email: 'julihan@gmail.com',
        pic:'https://randomuser.me/api/portraits/women/21.jpg',
        id: 5,
    },
    
];

async function get(id){
    const user = await collection.findOne({_id: new ObjectId(id)});
    if(!user){
        throw { statusCode:404, message: 'User not found' };
    }
    return {...user, password: undefined};
}

async function getByHandle(handle){
    const user = await collection.findOne({ handle });
    if(!user){
        throw { statusCode:404, message: 'User not found' };
    }
    return {...user, password: undefined};
}

async function remove(id){
    const user = await collection.findOneAndDelete({ _id: new ObjectId(id)});
    
    return {...user.value, password: undefined};
}

async function update(id, newUser){
    if(newUser.password){
        newUser.password = await bcrypt.hash(newUser.password,10);
    }
    newUser = await collection.findOneAndUpdate(
        {_id: new ObjectId(id)}, 
        { $set: newUser },
        { returnDocument: 'after' }
        );
    console.log(newUser);
    return {...newUser, password: undefined} ;
}

async function login(email, password){
    const user = await collection.findOne({ email });
    
    if(!user){
        throw { statusCode:404, message: 'User not found' };
    }
    if(!await bcrypt.compare(password, user.password)){
        throw { statusCode:401, message: 'Invalid password' };
    }
    const data = {...user, password: undefined};
    const token = jwt.sign(data, process.env.JWT_SECRET);

    return { ...data, token };
}

function fromToken(token){

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) =>{
            if(err){
                reject(err);
            }else{
                resolve(decoded);
            }
        });
    });
}
function seed(){
    return collection.insertMany(list);
}

module.exports = {
    collection, 
    seed,
    getByHandle,
    async create(user){
        user.id = ++highestId;
        if(!user.handle){
            throw { statusCode:400, message: 'Handle is required' };
        }
        user.password = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS);
        console.log(user);

        const result = await collection.insertOne(user);
        user = await get(result.insertedId);

        return {...user, password: undefined};
    },
    remove,
    update,
    login,
    fromToken,
    async getList(){
        return (await collection.find().toArray()).map(x=> ({...x, password: undefined}) );
    }
}
module.exports.get = get;