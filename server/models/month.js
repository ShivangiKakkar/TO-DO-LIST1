
const { db, ObjectId } = require('./mongo');
const userModel = require('./user');

const collection = db.db("diary").collection("months");

let highestId = 12;

const list = [
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/21.-Water-on-Black-Glass-Background-January-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for January',
    designer: 'jewpaltz',
    likes: [],
    comments: [],
    isPublic: true,
    id: 1,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/18.-Glitter-Rose-Gold-Wallpaper-February-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for February',
    designer: 'shivi',
    likes: [],
    comments: [],
    isPublic: true,
    id: 2,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/7.-Light-Blue-Watercolor-Painting-Background-March-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for March',
    designer: 'joebiden',
    likes: [],
    comments: [],
    isPublic: true,
    id: 3,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/18.-Gold-Glitter-Background-April-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for April',
    designer: 'putin',
    likes: [],
    comments: [],
    isPublic: true,
    id: 4,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/10.-Pretty-Bows-Background-May-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for May',
    designer: 'putin',
    likes: [],
    comments: [],
    isPublic: true,
    id: 5,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/4.-Rose-Gold-Circles-Background-June-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for June',
    designer: 'joebiden',
    likes: [],
    comments: [],
    isPublic: true,
    id: 6,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/1.-White-Aesthetic-Wooden-Background-July-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for July',
    designer: 'jewpaltz',
    likes: [],
    comments: [],
    isPublic: true,
    id: 7,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/27.-Light-Pink-SaturdayGift-August-2022-Calendar-Background.jpg',
    caption: 'Calendar for August',
    designer: 'juli',
    likes: [],
    comments: [],
    isPublic: true,
    id: 8,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/31.-Pink-Butter-Cream-Frosting-Background-September-2022-Calendar-SaturdayGift.jpg',
    caption: 'Calendar for September',
    designer: 'juli',
    likes: [],
    comments: [],
    isPublic: true,
    id: 9,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/4.-Golden-Full-Moon-October-2022-Calendar-Wallpaper-SaturdayGift.jpg',
    caption: 'Calendar for October',
    designer: 'jewpaltz',
    likes: [],
    comments: [],
    isPublic: true,
    id: 10,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/1.-Happy-Thanksgiving-November-2022-Calendar-Wallpaper-SaturdayGift.jpg',
    caption: 'Calendar for November',
    designer: 'joebiden',
    likes: [],
    comments: [],
    isPublic: true,
    id: 11,
},
{
    src: 'https://www.saturdaygift.com/wp-content/uploads/12-Cute-Little-Disco-Balls-Background-with-Gold-Stars-December-2022-Calendar-SaturdayGift-473x1024.jpg',
    caption: 'Calendar for December',
    designer: 'shivi',
    likes: [],
    comments: [],
    isPublic: true,
    id: 12,
},
];

const includeUser = async month => ({ ...month, user: await userModel.getByHandle(month.designer) });

async function get(id){
    const month = await collection.findOne({_id: new ObjectId(id)});
    if(!month){
        throw { status: 404, message: 'Month not found' };
    }
    return includeUser(month);
}
async function getCalendar(handle){
    const months = await collection.find({ designer: handle }).toArray();

    return Promise.all( months.map(x=> includeUser(x) ) );
}

async function remove(id){
    const month = await collection.findOneAndDelete({ _id: new ObjectId(id)});
    
    return includeUser(month.value);
}

async function update(id, newMonth){
    newMonth = await collection.findOneAndUpdate(
        { _id: new ObjectId(id)}, 
        { $set: newMonth }, 
        { returnDocument: 'after' });
    return includeUser(newMonth);
}
function seed(){
    return collection.insertMany(list);
}


module.exports = {
    async create(month){
        month.id = ++highestId;

        const result = await collection.insertOne(month);
        month = await get(result.insertedId);

        return includeUser(month);
    },
    remove,
    update,
    async getList(){
        const months = await collection.find({}).toArray();

        return Promise.all( months.map(x => includeUser(x)));
        
        //promise all means you want all of these promises to happen
    },
    getCalendar,
    seed,
}
//getter -> every part of program 

// one option -> module.exports.list = ()=>list.map(x=>({...x, password: undefined}) );
module.exports.get = get;