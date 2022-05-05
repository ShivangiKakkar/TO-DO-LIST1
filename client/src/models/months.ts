import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';

export const useMonths = defineStore('months', {

  state: () => ({
    list: [] as Month[],
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
    },
    async deleteMonth(_id: string = ''){
      const note_to_be_deleted = await this.session.api('months/' + _id ,{},'DELETE');
      let i = this.list.map((month) => month._id).indexOf(_id);
      this.list.splice(i,1);
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