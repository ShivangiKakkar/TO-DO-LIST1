// import { defineStore } from 'pinia'
// import { api } from './myFetch';
// import { User } from './user';

// export const useTasks = defineStore('tasks', {

//   state: () => ({
//     list: [] as Task[],
//   }),
//   actions: {
//     async fetchMonths() {
//       const tasks = await api('tasks');
//       this.list = tasks.data;
//     }
//   }
// })


// export interface Task{
//     title: string;
//     isDone: boolean;
//     author: User;
//     assignedTo: string;
//     date: string;
//     id: number;
// }
export interface Task{
    title: string;
    isDone: boolean;
    author: string;
    assignedTo: string;
    date: string;
    id: number;
}

export const taskList: Task[] = [
{
    title: 'Do mid-term', 
    isDone: false, 
    author: 'jewpaltz', 
    assignedTo: 'sk', 
    date: '',
    id:1
},
{ title: 'Add some more features', 
isDone: true, 
author: 'sk', 
assignedTo: 'vp',  
date: '',
id: 2
},               
];