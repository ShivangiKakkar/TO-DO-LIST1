<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useSession } from '../models/session';
import NotesLook from "./NotesLook.vue";
import AddNotes from "./AddNotes.vue";
import { Note, useNotes } from "../models/notes";





const route = useRoute();


const notes = useNotes();
notes.fetchNotes(route.params.handle as string);



const session = useSession();

const newNote = ref<Note>(
    { 
      title: "",
      creater: "",
      user: session.user
    });

    function saveNote(){
        if(newNote){
        notes.createNote(newNote.value);
        newNote.value = {
          title: "",
          creater: "",
          user: session.user
         }
    }
    }

</script>
<template>
    <div>
        <article class="panel is-danger is-right">
                      <p class="has-text-danger panel-heading has-background-danger-light">
                      Notes
                      </p>
                      <p class="panel-tabs">
                        <!-- <a>Groceries</a> -->
                      </p>
                      <!--ADD NOTES -->
                <add-notes :note="newNote" @save="saveNote()"></add-notes>
                <notes-look v-for="note in notes.list" :key="note._id" :note="note" @remove="notes.deleteNote(note._id)"></notes-look>
                   <!-- <div class="panel-block">
                    <button class="button is-danger is-outlined is-fullwidth">
                    Clear all notes
                    </button>
                </div> -->
            </article>
    </div>
</template>

<style scoped>
a {
  color: rgb(234,44,85);
}
</style>