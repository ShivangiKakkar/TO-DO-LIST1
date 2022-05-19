<script setup lang="ts">
    import { ref } from "vue";
    import { Task, useTasks } from "../models/tasks";
    import { useRoute } from "vue-router";
    import AddTasks from "../components/AddTasks.vue";
    import Footer from "../components/Footer.vue";
    import TaskLook from "../components/TaskLook.vue";
    import Notes from "../components/Notes.vue";
    import { useSession } from "../models/session";
    // import AutoComplete from "../components/AutoComplete.vue";
    import { allUsers } from "../models/user";

    const route = useRoute();
    const tasks = useTasks();
    const session = useSession();

    const users = allUsers()
    const list = users.fetchUsers();
  
    // tasks.fetchAllTasks();
    // tasks.myTasks();
    tasks.fetchTasks(route.params.handle as string);

    const newTask = ref<Task>(
    { 
      title: "",
      author: "",
      assignedTo: session.user?.handle ?? "",
      date: "",
      isDone: false,
    } );
    function saveTask(){
        if(newTask){
        tasks.createTask(newTask.value);
        newTask.value = {
            title: "",
            author: "",
            assignedTo: session.user?.handle ?? "",
            date: "",
            isDone: false
         }
    }
    }

</script>

<template>
<div class="section">
    <div>
        <!-- <auto-complete></auto-complete> -->
    </div>
    <div class="columns">

        <div class="section column is-two-thirds">
            <nav class="panel">
                <p class="panel-heading has-text-info has-background-info-light">
                    To-Do List
                </p>
                <add-tasks :task="newTask" @save="saveTask()">
                </add-tasks>
                <p class="panel-tabs">
                     <a :class="{ 'is-active': tasks.tab_selection == 'all_tasks' }" @click="tasks.tab_selection = 'all_tasks'">All Tasks</a>
                     <a :class="{ 'is-active': tasks.tab_selection == 'assigned_to_me' }" @click="tasks.tab_selection = 'assigned_to_me'">Assigned to me</a>
                     <a :class="{ 'is-active': tasks.tab_selection == 'completed' }" @click="tasks.tab_selection = 'completed'">Completed</a>
                </p>
                <!-- LOOP THROUGH TASKS -->
                <div>
                <task-look v-for="task in tasks.filterTasks()" :key="tasks.$id" :task="task" @remove="tasks.deleteTask(task._id)" @update="tasks.markAsDone(task._id, task)"></task-look>
                </div>

                <div class="panel-block">
                    <!-- <button class="button is-info is-outlined is-fullwidth">
                    Reset all tasks
                    </button> -->
                </div>
            </nav>
        </div>
        <!-- NOTES -->
        <div class="section is-one-quarter">
            <Notes />
        </div>
  
    </div>
     <!-- columns -->
</div>  <!-- section -->
<Footer />
</template>

<style scoped>
a {
    color: rgb(50,120,198);
}
Footer{
     margin-top: 20rem; 
}
.select, .date{
    margin-left: 0.3rem;
}
.task_assignee{
    margin-left: 4rem;
}
.task_author{
    margin-left: 7rem;
}
.task_date{
    margin-left: 8rem;
}
</style>