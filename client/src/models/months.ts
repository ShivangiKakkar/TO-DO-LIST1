import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';

export const useMonths = defineStore('months', {

  state: () => ({
    list: [] as Month[],
    //list2: [] as Month[],
    session: useSession(),
  }),
  actions: {
    async fetchMonths(handle: string = '') {
      console.log("IN STORE(MONTHS) "+ handle)
      const months = await this.session.api('months/calendar/' + handle);
      this.list = months;
    },
    async fetchAllMonths() {
      const monthsList = await this.session.api('months');
      this.list = monthsList;
    },
    async createMonth(month: Month) {
      const newMonth = await this.session.api('months', month);
      this.list.push(newMonth);
    }

  }
})

export interface Month {
  _id?: string;
  src: string;
  caption: string;
  designer: string;
  user?: User;
  likes: string[];
  comments: any[];
  isPublic: boolean;
}