<script setup lang="ts">
  import { useMonths } from "../models/months";
  import MonthView from "../components/MonthView.vue";
  const months = useMonths();
  months.fetchMonths();
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

                <month-view v-for="month in months.list" :key= "month._id" :month="month">

                </month-view>
              </div>
              <div class="column is-one-quarter">
                  <article class="panel is-danger">
                      <p class="has-text-danger panel-heading has-background-danger-light">
                      Take Notes
                      </p>
                      <p class="panel-tabs">
                        <a class="is-active">Groceries</a>
                        <a>Wishlist</a>
                        <a>Brain Dump</a>
                        <a>Random Chores</a>
                      </p>
                    <div class="panel-block">
                      <p class="control has-icons-left">
                        <input class="input is-danger" type="text" placeholder="Search">
                        <span class="icon is-left">
                          <i class="fas fa-search" aria-hidden="true"></i>
                        </span>
                      </p>
                    </div>
                <a class="panel-block is-active">
                  <span class="panel-icon">
                    <i class="fa-solid fa-basket-shopping" aria-hidden="true"></i>
                  </span>
                  Milk
                </a>
                <a class="panel-block">
                  <span class="panel-icon">
                    <i class="fa-solid fa-basket-shopping" aria-hidden="true"></i>
                  </span>
                  Sugar
                </a>
                <a class="panel-block">
                  <span class="panel-icon">
                    <i class="fa-solid fa-basket-shopping" aria-hidden="true"></i>
                  </span>
                  Green Tea
                  </a>
                  <a class="panel-block">
                    <span class="panel-icon">
                      <i class="fa-solid fa-basket-shopping" aria-hidden="true"></i>
                    </span>
                    Nuts
                  </a>
            </article>
              </div>
          
              
            </div>
          
          </div>





    <!-- <div>
        <img src="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80">
        <img src="https://images.unsplash.com/photo-1592271019141-b5c71a9cfd71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80">
        <img src="https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80">
        <img src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80">
    </div> -->
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