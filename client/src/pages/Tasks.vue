<script>
    import { computed, defineComponent, reactive } from "vue";
    import session from '../models/session';
    import * as users from "../models/user";

    export default defineComponent({
        setup() {
            const state = reactive({
                message: 'Hey there! I am using Vue!',
                loggedInUser: session.user,
                currentTab: 'created_by_me',
                newTitleName: '',
                dataMap: {},
                all_users: users.list,
                currentTaskAssignedTo: session.user.handle,
                tasks: [
                     //{ title: 'Do mid-term', isDone: false, author: 'jewpaltz', assignedTo: 'sk', date: new Date("March 14, 2022")},
                    // { title: 'Add some more features', isDone: true, author: 'sk', assignedTo: 'vp',  date: new Date("March 13, 2022")},
                ]
            });
            console.log(state.all_users.list);
            
            let data1 = state.tasks.filter(a => (a.author == state.loggedInUser.handle));
            let data2 = state.tasks.filter(a => (a.assignedTo == state.loggedInUser.handle));
            let data3 = state.tasks.sort(function(a,b) { return a.date > b.date });
            
            let dataMap2 = {};
            dataMap2['created_by_me'] = data1;
            dataMap2['assigned_to_me'] = data2;
            dataMap2['sorted_by_date'] = data3;

            state.dataMap = dataMap2;
            
            console.log(dataMap2)

            function changeTab(tab) {
                state.currentTab = tab;
            };
            function addTask() {
                state.tasks.unshift({
                    title: state.newTitleName,
                    isDone: false,
                    author: state.loggedInUser.handle,
                    assignedTo: state.currentTaskAssignedTo,
                    date: state.date,
                });
                state.newTitleName = '';
                let data1 = state.tasks.filter(a => (a.author == state.loggedInUser.handle));
                let data2 = state.tasks.filter(a => (a.assignedTo == state.loggedInUser.handle));
                
                let dataMap2 = {};
                dataMap2['created_by_me'] = data1;
                dataMap2['assigned_to_me'] = data2;
                dataMap2['sorted_by_date'] = data3;

                state.dataMap = dataMap2;
            };
            function selectedUserEvent(event) {
                console.log(event.target.value)
                state.currentTaskAssignedTo = event.target.value;
                }
            const pendingTasks = computed (() => {
                return state.dataMap[state.currentTab];
            })

            return {
                state,
                addTask,
                changeTab,
                selectedUserEvent,
                pendingTasks,
            }; 
            },
        });


</script>

<template>
<div class="section columns">
    <div class="column is-four-fifths">
        <article class="panel">
            <div class="tabs is-boxed">
                <ul>
                    <li :class="{ 'is-active': state.currentTab == 'created_by_me'}" @click="changeTab('created_by_me')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-clipboard-list"></i></span>
                        <span id="created_by_me">Tasks created by me</span>
                    </a>
                    </li>
                    <li :class="{ 'is-active': state.currentTab == 'assigned_to_me'}" @click="changeTab('assigned_to_me')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-calendar-times"></i></span>
                        <span id="assigned_to_me">Tasks assigned to me</span>
                    </a>
                    </li>
                    <li  :class="{ 'is-active': state.currentTab == 'sorted_by_date'}" @click="changeTab('sorted_by_date')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-calendar"></i></span>
                        <span id="all">Tasks sorted by Date</span>
                    </a>
                    </li>
                </ul>
                
            </div>
            
            <div class="panel-block">
         
            <div class="field has-addons" style="width: 100%;">
                <div class="control has-icons-left is-expanded">
                    <input class="input is-warning field" type="text" placeholder="New Task" v-model="state.newTitleName">
                    <span class="icon is-left">
                        <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="control" @click="addTask">
                    <button class="button is-warning">Add</button>
                </div>

                <div class="select">
                        <select @change="selectedUserEvent($event)">
                            <option v-for="user in state.all_users" :value="user.handle">
                                Assign To - {{user.firstname}} ({{user.handle}})
                            </option>
                        </select>
                </div>
                <!-- DATE -->
                <div class="date">
                    <input type="date" id="date" v-model="state.date">  
                </div>
            </div>
            </div>
            
                <label>
                <span class="panel-block" v-for="task in pendingTasks" :key="task.title">
                    <input type="checkbox" v-model=task.isDone />

                    <div class="column task_name">
                        {{ task.title }}
                    </div>
                    <div class="column author_name">
                        <p>Created by: {{task.author}}</p>
                    </div>
                    <div class="column assignedTo_name">
                        <p>Assigned to: {{task.assignedTo}}</p>
                    </div>
                    <div class="column">
                        <p>Due: {{task.date}}</p>
                    </div>
                </span>
                </label>
            
        </article>
    </div> 
</div> 
   
</template>

<style>
    .task_components{
        display: inline;
    }
    .author_name{
        color: rgb(121, 192, 216);
    }
    .assignedTo_name{
        color: rgb(197, 163, 118);
    }
    .task_date{
        color: rgb(163, 161, 161);
    }
    .select{
        margin-left: 10px;
        display: inline;
    }
    .date{
        margin-left: 10px;
        margin-top: 5px;
    }
</style>