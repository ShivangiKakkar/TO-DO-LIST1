<script setup lang="ts">
import { Task } from "../models/tasks";
import { allUsers } from "../models/user";
const { task } = defineProps<{task: Task}>();

</script>

<template>

    <label class="panel-block">
        <button><input type="checkbox" v-model="task.isDone" @click="$emit('update')"></button>
        <div class="container">

            <div class="task_title">{{task.title}}</div>

            <div class="task_assignee">Assigned To: {{task.assignedTo}}</div>

            <div class="task_author">Assigned by: {{task.user.handle}}</div>

            <div class="task_date">Due: {{task.date}}</div>

            <button class="trash"><i class="fas fa-trash-alt" @click="$emit('remove')"></i></button>

        </div>

    </label>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.task_title{
   color: rgb(50,120,198);
}
.task_assignee{
    color: rgb(249, 172, 142);

}
.task_author{
    color: burlywood;

}
.task_date{
    color: rgb(244, 143, 145);
    margin-right: 3px;
}
button{
    border-style: none;
    background: none;
    
}
.trash{
    color: lightgray;
}

.trash :hover{
    color:rgb(249, 67, 67);
}
</style>