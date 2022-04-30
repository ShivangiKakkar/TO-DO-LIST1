import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';

export const useTasks = defineStore('tasks', {

  state: () => ({
    list: [] as Task[],
    session: useSession(),
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
    }
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
