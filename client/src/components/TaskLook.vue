<script setup lang="ts">
import { Task } from "../models/tasks";
const { task } = defineProps<{task: Task}>();


</script>

<template>
    <label class="panel-block">
        <input type="checkbox" checked>
            {{task.title}}
        <div class="task_assignee">
            Assigned To: {{task.assignedTo}}
        </div>
        <div class="task_author">
            Assigned by: {{task.user.handle}}
        </div>
        <div class="task_date">
            Due: {{task.date}}
        </div>
    </label>
</template>

<style scoped>
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