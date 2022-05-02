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
      console.log("IN STORE(TASKS) "+ handle)
      const tasks = await this.session.api('tasks/todo/' + handle);
      this.list = tasks;
    },
    async fetchAllTasks() {
      const tasksList = await this.session.api('tasks');
      this.list = tasksList;
    },
    async createTask(task: Task) {
      const newTask = await this.session.api('tasks', task);
      this.list.push(newTask);
    },


    filterTasks()  {
      const session = useSession();
      if(this.tab_selection === "all_tasks"){
            return this.list.filter(function (task) {
              return task.isDone == false;
            });
          }
      else if(this.tab_selection === "assigned_to_me"){
        return this.list.filter(function (task) {
          return  task.assignedTo == session.user?.handle! && task.isDone == false;
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
    isDone: boolean;
    author: string;
    assignedTo: string;
    user?: User;
    date: string;
}
