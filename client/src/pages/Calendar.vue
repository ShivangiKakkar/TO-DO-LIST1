<script setup lang="ts">
  import { ref } from 'vue';
  import { Month, useMonths } from '../models/months';
  import { useRoute } from "vue-router";
  import MonthView from "../components/MonthView.vue";
  import MonthEdit from "../components/MonthEdit.vue";
  import { useSession } from "../models/session";
  import Notes from "../components/Notes.vue";
  import Footer from "../components/Footer.vue";

  const route = useRoute();

  const months = useMonths();
  months.fetchMonths(route.params.handle as string);

  // Trying to display all months in my db
  // const monthList = months.fetchAllMonths(); //THIS IS DISPLAYING ALL MONTHS IN MY DB
  // console.log("MONTHS LIST - "+ monthList);
  

  const session = useSession();
  console.log("SESSION USER "+ session.user); //user object
  //console.log("SESSION USERS "+session.users.list);
  const newMonth = ref<Month>(
    { 
      src: "",
      caption: "",
      designer: "",
      user: session.user,
      likes: [],
      comments: [],
      isPublic: false
    } );
  function saveMonth(){
    if(newMonth){
        months.createMonth(newMonth.value);
        newMonth.value = {
            src: "",
            caption: "",
            designer: "",
            user: session.user,
            likes: [],
            comments: [],
            isPublic: false
         }
    }
    }
  
  const currentTab = "All";
  const prompt = "What's on your mind?";
</script>

<template>

    <div class="section">
        <div class="columns">
            <div class="column is-one-quarter">
                <aside class="menu">
                    <p class="menu-label">
                      Printable 2022 Monthly Calendars
                    </p>
                    <ul class="menu-list">
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/01-JAN-Elegant-January-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">January</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/02-FEB-Elegant-February-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">February</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/03-MAR-Elegant-March-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">March</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/04-APR-Elegant-April-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">April</a></li>
                    </ul>
                    <p class="menu-label">
                      Current Quater
                    </p>
                    <ul class="menu-list">
                      <li>
                        <a class="is-active">May</a>
                        <ul>
                          <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/05-MAY-Elegant-May-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">Calendar</a></li>
                          <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/Monthly-habit-tracker-printable-green-PDF-SaturdayGift.pdf">Habit Tracker</a></li>
                          <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/Free-printable-weekly-habit-tracker-PDF-pink-SaturdayGift.pdf">Weekly Tracker</a></li>
                        </ul>
                      </li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/06-JUN-Elegant-June-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">June</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/07-JUL-Elegant-July-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">July</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/08-AUG-Elegant-August-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">August</a></li>
                    </ul>
                    <p class="menu-label">
                      Last Quater
                    </p>
                    <ul class="menu-list">
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/09-SEP-Elegant-September-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">September</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/10-OCT-Elegant-October-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">October</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/11-NOV-Elegant-November-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">November</a></li>
                      <li><a target="_blank" href="https://www.saturdaygift.com/wp-content/uploads/12-DEC-Elegant-December-2022-calendar-Free-Printable-Horizontal-Landscape-Black-White-Monday-Start-SaturdayGift.pdf">December</a></li>
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
                <month-edit :month="newMonth" @save="saveMonth()">
                </month-edit>
                <month-view :month="newMonth"></month-view>

                <month-view v-for="month in months.list" :key= "month._id" :month="month"  @remove="months.deleteMonth(month._id)">
                
                </month-view>
              </div>
              <div class="column is-one-quarter">
                  <!-- <month-view :month="newMonth"></month-view> -->
                  <notes/>
              </div>             
        </div>
    </div>
    <Footer/>
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






