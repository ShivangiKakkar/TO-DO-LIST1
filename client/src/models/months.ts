import { defineStore } from 'pinia'
import { api } from './myFetch';
import { User } from './user';

export const useMonths = defineStore('months', {

  state: () => ({
    list: [] as Month[],
  }),
  actions: {
    async fetchMonths() {
      const months = await api('months');
      this.list = months.data;
    }
  }
})

export interface Month {
  _id: string;
  src: string;
  caption: string;
  designer: string;
  user: User;
  likes: string[];
  comments: any[];
  isPublic: boolean;

}