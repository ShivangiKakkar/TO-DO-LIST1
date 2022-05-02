<script setup lang="ts">
import { Task } from "../models/tasks";
import { allUsers } from "../models/user";
const { task } = defineProps<{task: Task}>();

</script>

<template>

    <label class="panel-block">
        <input type="checkbox" v-model="task.isDone">
        <div class="container">

            <div class="task_title">{{task.title}}</div>

            <div class="task_assignee">Assigned To: {{task.assignedTo}}</div>

            <div class="task_author">Assigned by: {{task.user.handle}}</div>

            <div class="task_date">Due: {{task.date}}</div>

        </div>

    </label>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.task_title{
    color: palevioletred;
}
.task_assignee{
    color: rgb(249, 172, 142);

}
.task_author{
    color: burlywood;

}
.task_date{
    color: rgb(191, 189, 189);
    margin-right: 3px;
}
</style>