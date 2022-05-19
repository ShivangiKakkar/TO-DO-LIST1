import { defineStore } from 'pinia'
import { useSession } from './session';
import { api } from './myFetch';

export const allUsers = defineStore('users', {
    state: () => ({
        list: [] as User[],
        session: useSession(),
      }),
      actions: {
        async fetchUsers() {
            const allusers = await this.session.api('users');
            this.list = allusers;
          },
        async searchUser(handle: string = '') {
            const users = await this.session.api('users/finduser/' + {searchUser});
            this.list = users;
            return this.list.filter(option => {
              return option.handle.toLowerCase().includes(handle.toLowerCase());
            
            
            }
        }
})

export interface User{
    firstname: string;
    lastname: string;
    handle: string;
    password: string;
    email: string;
    pic: string;
    id: number;
    token?: string;
}