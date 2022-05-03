import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';
import { useRoute } from "vue-router";

export const useTasks = defineStore('tasks', {

  state: () => ({
    list: [] as Task[],
    myList: [] as Task[],
    session: useSession(),
    tab_selection: 'all_tasks',
    }),

  actions: {
    async fetchTasks(handle: string = '') {
      console.log("IN STORE(TASKS) "+ handle)
      const tasks = await this.session.api('tasks/todo/' + handle);
      this.list = tasks;
    },
    async myTasks(handle: string = '') {
      console.log("Fetch my tasks for "+ handle);
      const mytasks = await this.session.api('tasks/todo/myTasks/' + handle);
      this.myList = mytasks;
      // console.log(mytasks);
      console.log(this.myList);

    },
    async fetchAllTasks() {
      const tasksList = await this.session.api('tasks');
      this.list = tasksList;
    },
    async createTask(task: Task) {
      const newTask = await this.session.api('tasks', task);
      this.list.push(newTask);
    },
    async markAsDone(task: Task) {
      const updatedTask = await this.session.api('tasks/' + task._id, { done: true });
      
    },
    filterTasks() {
      const session = useSession();
      const route = useRoute();
      if(this.tab_selection === "all_tasks"){
        // console.log(this.list);    
        return this.list.filter(function (task) {
            //console.log(task);  
            return task;
            });
          }
      else if(this.tab_selection === "assigned_to_me"){
        var curHandle = this.$state.session.user?.handle
        return this.list.filter(function (task) {
          console.log(task);  
          return task.assignedTo == curHandle
                || (task.assignedTo == '' 
                    && task.author == curHandle);
          });
      }
      else if(this.tab_selection === "completed"){
        return this.list.filter(function (task) {
          return task.isDone;
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
