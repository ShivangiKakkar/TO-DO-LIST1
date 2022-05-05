<script setup lang="ts">
    import { Month } from "../models/months";
    const { month } = defineProps<{month: Month}>();
</script>

<template>
    <div>
        <div class="card">
            <form class="card-content">    
                <div class="field">
                    <div class="control">
                        <input class="input" type="text" v-model="month.src" placeholder="Share an image url"/>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <textarea class="textarea" v-model="month.caption" placeholder="Write Something...">
                        </textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <button class="button" @click.prevent="$emit('save')">Update Month</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>

<style scoped>
.button{
    background-color: #FFC0CB;
}
</style>