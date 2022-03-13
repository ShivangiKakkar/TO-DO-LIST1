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
                    { title: 'Make Bulma great again', isDone: false, author: 'sk', assignedTo: 'vp', date: new Date    ("March 13, 2022")},
                    { title: 'Add some more features', isDone: true, author: 'sk', assignedTo: 'vp',  date: new Date("March 13, 2022")},
                    { title: 'Make a github account', isDone: false, author: 'vp', assignedTo: 'sk',  date: new Date("March 13, 2022")},
                    { title: 'Learn how to use github', isDone: false, author: 'vp', assignedTo: 'jb', date: new Date("March 13, 2022")},
                    { title: 'add a .gitignore file', isDone: false, author: 'jb', assignedTo: 'vp', date: new Date("March 13, 2022")},
                    ]
            });
            console.log(state.all_users.list)
            
            let data1 = state.tasks.filter(a => (a.author == state.loggedInUser.handle));
            let data2 = state.tasks.filter(a => (a.assignedTo == state.loggedInUser.handle));
            let data3 = state.tasks.sort(function(a,b) { return a.date > b.date });
            
            let dataMap2 = {};
            dataMap2['created_by_me'] = data1;
            dataMap2['assigned_to_me'] = data2;
            dataMap2['sorted_by_date'] = data3;

            state.dataMap = dataMap2;
            
            console.log(dataMap2)

            // filter -> author = loggedin user,handle -> created by me tav
            //assigned to me == logedin user.handle ->
            //date sep by date. 

            function changeTab(tab) {
                state.currentTab = tab;
            };
            function addTask() {
                console.log(state.newTitleName)
                state.tasks.unshift({
                    title: state.newTitleName,
                    isDone: false,
                    author: state.loggedInUser.handle,
                    assignedTo: state.currentTaskAssignedTo,
                    date: new Date(),
                });
                state.newTitleName = '';
                let data1 = state.tasks.filter(a => (a.author == state.loggedInUser.handle));
                let data2 = state.tasks.filter(a => (a.assignedTo == state.loggedInUser.handle));
                let data3 = state.tasks.sort(function(a,b) { return a.date > b.date });
                
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
    <div class="column is-half">
        <article class="panel">
            <div class="tabs is-boxed">
                <ul>
                    <li :class="{ 'is-active': state.currentTab == 'created_by_me'}" @click="changeTab('created_by_me')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-clipboard-list"></i></span>
                        <span id="created_by_me">created_by_me</span>
                    </a>
                    </li>
                    <li :class="{ 'is-active': state.currentTab == 'assigned_to_me'}" @click="changeTab('assigned_to_me')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-calendar-times"></i></span>
                        <span id="assigned_to_me">assigned_to_me</span>
                    </a>
                    </li>
                    <li  :class="{ 'is-active': state.currentTab == 'sorted_by_date'}" @click="changeTab('sorted_by_date')">
                    <a>
                        <span class="icon is-small"><i class="fas fa-calendar"></i></span>
                        <span id="all">sorted_by_date </span>
                    </a>
                    </li>
                </ul>
            </div>
            <div class="panel-block">
            <div class="field has-addons " style="width: 100%;">
                <div class="control has-icons-left is-expanded">
                    <input class="input is-primary field" type="text" placeholder="New Task" v-model="state.newTitleName">
                    <span class="icon is-left">
                        <i class="fas fa-calendar-plus" aria-hidden="true"></i>
                    </span>
                    <div class="select">
                        <select @change="selectedUserEvent($event)">
                            <option v-for="user in state.all_users" :value="user.handle">{{user.firstname}} ({{user.handle}})</option>
                        </select>
                    </div>
                </div>
                <div class="control" @click="addTask">
                    <button class="button is-primary">Add</button>
                </div>
            </div>
            </div>
                <label>
                <span class="panel-block" v-for="task in pendingTasks" :key="task.title">
                    <input type="checkbox" v-model=task.isDone />
                    {{ task.title }}, {{task.author}}, {{task.assignedTo}}, {{task.date}}
                </span>
                </label>
        </article>
    </div> 
</div> 
   
</template>

    <style>
    </style>