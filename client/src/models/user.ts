export interface User{
    firstname: string;
    lastname: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
}

export const list: User[] = [
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
    password: 'coffee',
    email: 'shivangikakkar15@gmail.com',
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
    email: 'julihan.com',
    pic:'https://randomuser.me/api/portraits/women/21.jpg',
    id: 5,
},

];