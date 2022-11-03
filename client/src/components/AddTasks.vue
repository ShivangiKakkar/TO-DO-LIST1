
<script setup lang="ts">
import { ref } from "vue";
import { Task } from "../models/tasks";
import { allUsers } from "../models/user";


const { task } = defineProps<{task: Task}>();

const users = allUsers()
const list = users.fetchUsers();

</script>

<template>
    <div class="panel-block">

    <input class="input" type="text" v-model="task.title" placeholder="Add a new task">

        <div class="select">
            <select v-model="task.assignedTo">
                
                <option v-for="user in users.list" :key="users.$id" :user="user">
                {{ user.handle }}
                </option>
            </select>
        </div>
         
        

        <div class="date is-normal">
            <input class="input field" type="date" id="date" v-model="task.date">
        </div>
                    
        <div class="panel-block">
            <button class="button is-info is-outlined is-fullwidth" @click.prevent="$emit('save')">
                <i class="fas fa-add" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
