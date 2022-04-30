
<script setup lang="ts">
import { Note } from "../models/notes";
import {User} from "../models/user";
import { useRoute } from "vue-router";
import { useSession } from '../models/session';
const { note } = defineProps<{note: Note}>();

const route = useRoute();
const session = useSession();
</script>
<template>

<div class="panel-block">
    <input class="input" type="text" v-model="note.title" placeholder="Create a new note">
    <div class="panel-block">
        <button class="button is-danger is-outlined is-fullwidth" @click.prevent="$emit('save')">
            <i class="fas fa-add" aria-hidden="true"></i>
        </button>
    </div>
</div>
</template>
<style scoped>

</style>