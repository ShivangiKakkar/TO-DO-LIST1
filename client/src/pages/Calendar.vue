<script setup lang="ts">
  import { reactive } from 'vue';
  import { Month, useMonths } from '../models/months';
  import { useRoute } from "vue-router";
  import MonthView from "../components/MonthView.vue";
  import MonthEdit from "../components/MonthEdit.vue";
  import { useSession } from "../models/session";
  import Notes from "../components/Notes.vue";

  const route = useRoute();

  const months = useMonths();
  months.fetchMonths(route.params.handle as string);

  // Trying to display all months in my db
  // const monthList = months.fetchAllMonths(); //THIS IS DISPLAYING ALL MONTHS IN MY DB
  // console.log("MONTHS LIST - "+ monthList);
  

  const session = useSession();
  console.log("SESSION USER "+session.user); //user object
  //console.log("SESSION USERS "+session.users.list);
  const newMonth = reactive<Month>(
    { 
      src: "",
      caption: "",
      designer: "",
      user: session.user,
      likes: [],
      comments: [],
      isPublic: false
    } );
  
  const currentTab = "All";
  const prompt = "What's on your mind?";
</script>

<template>

    <div class="section">
        <div class="columns">
            <div class="column is-one-quarter">
                <aside class="menu">
                    <p class="menu-label">
                      2022
                    </p>
                    <ul class="menu-list">
                      <li><a>January</a></li>
                      <li><a>February</a></li>
                      <li><a>March</a></li>
                    </ul>
                    <p class="menu-label">
                      Current Quater
                    </p>
                    <ul class="menu-list">
                      <li>
                        <a class="is-active">April</a>
                        <ul>
                          <li><a>Monthly Calendar</a></li>
                          <li><a>Habit Tracker</a></li>
                          <li><a>Fitness Tracker</a></li>
                        </ul>
                      </li>
                      <li><a>May</a></li>
                      <li><a>June</a></li>
                      <li><a>July</a></li>
                      <li><a>August</a></li>
                      <li><a>September</a></li>
                    </ul>
                    <p class="menu-label">
                      Last Quater
                    </p>
                    <ul class="menu-list">
                      <li><a>October</a></li>
                      <li><a>November</a></li>
                      <li><a>December</a></li>
                    </ul>
                    <a class="button" target="_blank" href="https://www.calendarlabs.com/templates/2022/2022-printable-calendar-pdf-03.pdf">
                        <span class="icon">
                            <i class="fas fa-download"></i>
                        </span>
                        <span>Download 2022 Calendar</span>
                    </a>
                  </aside>
            </div>
            <div class="column is-two-fifths">
                
                <!-- CARD -->
                <month-edit :month="newMonth" @save="months.createMonth(newMonth)">
                </month-edit>

                <month-view v-for="month in months.list" :key= "month._id" :month="month">
                
                </month-view>
              </div>
              <div class="column is-one-quarter">
                  <month-view :month="newMonth"></month-view>
                  <notes/>
              </div>             
        </div>
    </div>
</template>



<style scoped>
  .card{
      margin-bottom: 2rem;
  }

.menu-list a.is-active{
    background-color: #FEEDCF;
    color: black;
}
.button{
    background-color: #FFC0CB;
}
</style>






