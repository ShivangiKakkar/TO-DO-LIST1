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
                
]