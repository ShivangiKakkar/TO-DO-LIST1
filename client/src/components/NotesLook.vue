<script setup lang="ts">
import { Note } from "../models/notes";
const { note } = defineProps<{note: Note}>();

</script>

<template>
    <a class="panel-block is-active">
        <span class="panel-icon">
            <i class="fa-solid fa-x" aria-hidden="true"></i>
        </span>
    {{note.title}}
    </a>

</template>

<style>
</style>