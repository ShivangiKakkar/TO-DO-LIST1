<script setup lang="ts">
    import { reactive } from "vue";
    import { Task, useTasks } from "../models/tasks";
    import { useRoute } from "vue-router";
    import AddTasks from "../components/AddTasks.vue";
    import Footer from "../components/Footer.vue";
    import TaskLook from "../components/TaskLook.vue";
    import Notes from "../components/Notes.vue";

    const route = useRoute();
    const tasks = useTasks();
    tasks.fetchTasks(route.params.handle as string);

    const newTask = reactive<Task>(
    { 
      title: "",
      author: "",
      assignedTo: "",
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
                    <a :class="{ 'is-active': tasks.tab_selection == 'all_tasks' }" @click="tasks.tab_selection = 'all_tasks'">All Tasks</a>
                    <a :class="{ 'is-active': tasks.tab_selection == 'assigned_to_me' }" @click="tasks.tab_selection = 'assigned_to_me'">Assigned to me</a>
                    <a :class="{ 'is-active': tasks.tab_selection == 'completed' }" @click="tasks.tab_selection = 'completed'">Completed</a>
                </p>
                <!-- LOOP THROUGH TASKS -->
                <div>
                <task-look v-for="task in tasks.filterTasks()" :key="task._id" :task="task"></task-look>
                </div>

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