<script setup lang="ts">
    import { reactive } from "vue";
    import { useSession } from '../models/session';
    import { Task, useTasks } from "../models/tasks";
    import { Note, useNotes } from "../models/notes";
    import { useRoute } from "vue-router";
    import AddTasks from "../components/AddTasks.vue";
    import Footer from "../components/Footer.vue";
    import TaskLook from "../components/TaskLook.vue";
    import Notes from "../components/Notes.vue";

    const route = useRoute();
    const tasks = useTasks();
    tasks.fetchTasks(route.params.handle as string);

    //const taskList = tasks.fetchAllTasks();

    // NOTES LIST
    

    const session = useSession();

    //const users = session.users;

    const newTask = reactive<Task>(
    { 
      title: "",
      author: "",
      assignedTo: "",
      user: session.user,
      date: "",
      isDone: false
    } );
    const currentTab = "All";
  
    
</script>

<template>
<div class="section">
    <div class="columns">
        <div class="section column is-two-thirds">
            <nav class="panel">
                <p class="panel-heading has-text-info has-background-info-light">
                    To-Do List
                </p>
                <add-tasks :task="newTask" @save="tasks.createTask(newTask)">
                </add-tasks>
                <p class="panel-tabs">
                    <a class="is-active">All Tasks</a>
                    <a>Assigned to me</a>
                    <a>Completed</a>
                </p>
                <!-- LOOP THROUGH TASKS -->
                <task-look v-for="task in tasks.list" :key="task._id" :task="task"></task-look>
                <div class="panel-block">
                    <button class="button is-info is-outlined is-fullwidth">
                    Reset all tasks
                    </button>
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
    margin-top: 14.5rem;
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