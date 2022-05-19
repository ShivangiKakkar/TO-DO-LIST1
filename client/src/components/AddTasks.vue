
<script setup lang="ts">
import { Task } from "../models/tasks";
import { allUsers } from "../models/user";
const { task } = defineProps<{task: Task}>();

const users = allUsers()
const list = users.fetchUsers();





</script>


<template>
    <div class="panel-block">
        <input class="input" type="text" v-model="task.title" placeholder="Add a new task">
        <div>
            <p class="content"><b>Selected:</b> {{ selected }}</p>
            <o-field label="Find a user">
            <o-autocomplete
                
                placeholder="Search a user"
                field="title"
                :loading="isFetching"
                check-infinite-scroll
                :debounce-typing="500"
                @typing="getAsyncData"
                @select="" => selected = option"
                @infinite-scroll="getMoreAsyncData"
            >
                <template v-slot-scope="props">
                <div class="media">
                    <div class="media-left">
                    <img width="32" :src="`${prop.user.pic}`" />
                    </div>
                    <div class="media-content">
                    {{ props }}
                </div>
                </div>
                </template>
                <template v-slot="footer">
                <span v-show="$options" class="has-text-grey"> Thats it! No more movies found. </span>
                </template>
            </o-autocomplete>
            </o-field>

            <!-- <select v-model="task.assignedTo">
                
                <option v-for="user in users.list" :key="users.$id" :user="user">
                {{ user.handle }}
                </option>
            </select> -->
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