<!-- 
<script setup lang="ts">
import { Task } from "../models/tasks";
import { allUsers } from "../models/user";
const { task } = defineProps<{task: Task}>();


const users = allUsers()
const list = users.fetchUsers();
</script>
<template>

<div class="panel-block">
    <input class="input" type="text" v-model="task.title" placeholder="Search Users">
        <div class="select">
            <select v-model="task.assignedTo">
                <option v-for="user in users.list" :key="users.$id" :user="user">
                {{ user.handle }}
                </option>
            </select>
        </div>
</div>
</template>
<style scoped>

</style> -->