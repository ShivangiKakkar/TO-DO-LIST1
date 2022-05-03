<script setup lang="ts">
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useSession } from '../models/session';
import NotesLook from "./NotesLook.vue";
import AddNotes from "./AddNotes.vue";
import { Note, useNotes } from "../models/notes";





const route = useRoute();


const notes = useNotes();
notes.fetchNotes(route.params.handle as string);



const session = useSession();

const newNote = reactive<Note>(
    { 
      title: "",
      creater: "",
      user: session.user,
    });

</script>
<template>
    <div>
        <article class="panel is-danger is-right">
                      <p class="has-text-danger panel-heading has-background-danger-light">
                      Notes
                      </p>
                      <p class="panel-tabs">
                        <a class="is-active">Groceries</a>
                        <a>Wishlist</a>
                        <a>Brain Dump</a>
                      </p>
                      <!--ADD NOTES -->
                <add-notes :note="newNote" @save="notes.createNote(newNote)"></add-notes>
                <notes-look v-for="note in notes.list" :key="note._id" :note="note" @remove="notes.deleteNote(note)"></notes-look>
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