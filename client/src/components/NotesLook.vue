<script setup lang="ts">
import { Note } from "../models/notes";
const { note } = defineProps<{note: Note}>();


</script>

<template>
    <a class="panel-block is-active">
        <span class="panel-icon">
            <button><i class="fa-solid fa-x" aria-hidden="true" @click="$emit('remove')"></i></button>
        </span>
    {{note.title}}
    </a>

</template>

<style scoped>
button{
    border-style: none;
    background: none;
    color: rgb(234,44,85);
}
button :hover{
    color:black;
}
</style>