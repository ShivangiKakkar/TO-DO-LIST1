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
      console.log(handle);
    },
    async createNote(note: Note) {
      const newNote = await this.session.api('notes', note);
      this.list.push(newNote);
    },
    async deleteNote(_id: string = ''){
      //console.log("IN STORE(TASKS) "+ handle)
      const note_to_be_deleted = await this.session.api('notes/' + _id ,{},'DELETE');
      //console.log(note_to_be_deleted[0]);
      let i = this.list.map((note) => note._id).indexOf(_id);
      this.list.splice(i,1);
      
      //this.list.splice(note_to_be_deleted);
    }

  }
})

export interface Note{
    _id?: string;
    title: string;
    creater: string;
    user?: User;
}