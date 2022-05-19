
import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';

export const useTasks = defineStore('tasks', {

  state: () => ({
    list: [] as Task[],
    session: useSession(),
    tab_selection: 'all_tasks',
    }),

  actions: {
    async fetchTasks(handle: string = '') {
      const tasks = await this.session.api('tasks/todo/all' + handle);
      this.list = tasks;
    },
    
    async createTask(task: Task) {
      const newTask = await this.session.api('tasks', task);
      this.list.push(newTask);
    },
    async markAsDone(_id: string = '', task:Task) {
      let ct = this.list.filter((t) => t._id === task._id);
      ct[0].isDone = task.isDone;
      let updatedTask = await this.session.api('tasks/' + _id,ct[0], 'POST');
    },

    async deleteTask(_id: string = ''){
      const task_to_be_deleted = await this.session.api('tasks/todo/myTasks/' + _id ,{},'DELETE');
      let i = this.list.map((task) => task._id).indexOf(_id);
      this.list.splice(i,1);
    },

    filterTasks() {
      if(this.tab_selection === "all_tasks"){
        var curHandle = this.$state.session.user?.handle
        
        return this.list.filter(function (task) {
          // console.log(task);  
          return task.author == curHandle
                || (task.assignedTo == '' 
                    && task.author == curHandle);
          });

          }
      else if(this.tab_selection === "assigned_to_me"){
       
          var curHandle = this.$state.session.user?.handle
          return this.list.filter(function (task) {
            // console.log(task);  
            return task.assignedTo == curHandle
                  || (task.assignedTo == '' 
                      && task.author == curHandle);
            });
      
      }
      else if(this.tab_selection === "completed"){
        var curHandle = this.$state.session.user?.handle
        return this.list.filter(function (task) {
          return task.isDone && (task.author == curHandle || task.assignedTo == curHandle);
        });
      }
      },
    }
  })


export interface Task{
    _id?: string;
    title: string;
    isDone:  boolean;
    author: string;
    assignedTo: string;
    user?: User;
    date: string;
}
