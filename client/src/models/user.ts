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
    firstname: 'Shivangi',
    lastname: 'Kakkar',
    handle: 'sk',
    password: 'coffee',
    email: 'shivangikakkar15@gmail.com',
    pic: 'https://randomuser.me/api/portraits/women/21.jpg',
    id: 1,
},
{
    firstname: 'Vladimir',
    lastname: 'Putin',
    handle: 'vp',
    password: 'longtable',
    email: 'vladimirputin.com',
    pic:'https://randomuser.me/api/portraits/men/8.jpg',
    id: 2,
},
{
    firstname: 'Joe',
    lastname: 'Biden',
    handle: 'jb',
    password: 'birdsinging',
    email: 'joebiden.com',
    pic:'https://randomuser.me/api/portraits/men/76.jpg',
    id: 3,
},
{
    firstname: 'Moshe',
    lastname: 'Plotkin',
    handle: 'jewpaltz',
    password: 'vitaminwater',
    email: 'mosheplotkin.com',
    pic:'https://randomuser.me/api/portraits/men/76.jpg',
    id: 4,
},
{
    firstname: 'Juli',
    lastname: 'Han',
    handle: 'jh',
    password: 'hello',
    email: 'julihan.com',
    pic:'https://randomuser.me/api/portraits/women/21.jpg',
    id: 5,
},

];