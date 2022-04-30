import { defineStore } from 'pinia'
import { useSession } from './session';
import { User } from './user';

export const useNotes = defineStore('notes', {

  state: () => ({
    list: [] as Note[],
    session: useSession(),
    }),

  actions: {
    async fetchNotes(handle: string = '') {
      const notes = await this.session.api('notes/todo/' + handle);
      this.list = notes;
    },
    async createNote(note: Note) {
      const newNote = await this.session.api('notes', note);
      this.list.push(newNote);
    }
  }
})

export interface Note{
    _id?: string;
    title: string;
    creater: string;
    user?: User;
}