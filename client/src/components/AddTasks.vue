
<script setup lang="ts">
import { Task } from "../models/tasks";
import { allUsers } from "../models/user";
const { task } = defineProps<{task: Task}>();


const users = allUsers()
users.fetchUsers();


</script>


<template>
    <div class="panel-block">
        <input class="input" type="text" v-model="task.title" placeholder="Add a new task">
        <div class="select is-normal">
            <select v-model="task.assignedTo">
                <option v-for="user in users.list" :key="user.id" :user="user">
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



























<!-- 

<script setup lang="ts">
import { Task } from "../models/tasks";
const { task } = defineProps<{task: Task}>();

</script>
<template>
<div>
    <div class="field has-addons" style="width: 100%;">
        <p class="control has-icons-left">
            <input class="input control" type="text" placeholder="New Task" v-model="task.title"/>
            <span class="icon is-left">
                <i class="fas fa-calendar-plus" aria-hidden="true"></i>
            </span>      
        </p>
        <p class="control select">
            <select v-model ="task.assignedTo">
                    <option v-for="user in users">
                        Assign To - {{user.firstname}} ({{user.handle}})
                    </option>
            </select>
        </p>
        <p class="control">
            <input class="input field" type="date" id="date" v-model="task.date"/>
        </p>
        <p class="control">
            <button class="button is-warning" @click.prevent="$emit('save')">Add</button>
        </p>
    </div>
</div>
</template>

<style scoped>
</style> -->