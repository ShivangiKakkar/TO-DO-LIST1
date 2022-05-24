
<script setup lang="ts">
import { ref } from "vue";
import { Task } from "../models/tasks";
import { User, allUsers } from "../models/user";
import { useSession } from '../models/session';


const { task } = defineProps<{task: Task}>();

const users = allUsers()
const list = users.fetchUsers();
// const session = useSession();

//     const userS = ref([])

//     const isFetching = ref(false);

//     const page = ref(1);

//     const totalPages = ref(10);

 

//     async function fetchUsers(query: string) {

//         isFetching.value = true;

//         const response = await session.api("userS/search?s=" + query + "&page=" + page.value);

//         userS.value = response;

//         console.log(userS);

//         isFetching.value = false;

//     }

</script>


<template>
    <div class="panel-block">

    <input class="input" type="text" v-model="task.title" placeholder="Add a new task">
    <!-- <o-autocomplete

        :data="users"

        placeholder="Pick a user"

 

        :loading="isFetching"

        :debounce-typing="500"

        @typing="fetchUsers"

        @select="option => newTask.responsible = option"

    >

        <template v-slot:selected="props">

            <div class="tags has-addons">

                <span class="tag is-dark">

                    {{ props.option.firstname }} {{ props.option.lastname }}

                </span>

                <span class="tag is-primary">

                    {{ props.option.email }}

                </span>

            </div>

        </template>

        <template v-slot="props">

       

        <div class="media">

            <div class="media-left">

                <img width="32" :src="props.option.pic" />

            </div>

            <div class="media-content" style="line-height: 1em;">

                <b>{{ props.option.firstName }} {{ props.option.lastName }}</b>

            <br />

            <i style="font-size: smaller"> {{ props.option.handle }} </i>

            </div>

        </div>

        </template>

        <template v-slot:footer>

            <span v-show="page > totalPages" class="has-text-grey"> Thats it! No more users found. </span>

        </template>

    </o-autocomplete> -->

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
