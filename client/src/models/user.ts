import { defineStore } from 'pinia'
import { useSession } from './session';

export const allUsers = defineStore('users', {
    state: () => ({
        list: [] as User[],
        session: useSession(),
      }),
      actions: {
        async fetchUsers() {
            const allusers = await this.session.api('users');
            this.list = allusers;
            console.log("FETCH ALL USERS  " + allusers.list);
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