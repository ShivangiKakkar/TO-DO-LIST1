<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
import Notifications from './Notifications.vue';

  const isOpen = ref(true);
</script>

<template>
<nav class="navbar">
      
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/calendar">
            <img src="https://img.icons8.com/external-becris-solid-becris/64/000000/external-calendar-literary-genres-becris-solid-becris.png"/>
            <span class="calendar-icon">Calendar</span>
          </router-link>

          <a class="navbar-burger" data-target="navbarExampleTransparentExample"  :class="{'is-active': isOpen}" @click="isOpen = !isOpen">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      
        <div class="navbar-menu" :class="{'is-active': isOpen}">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">
              Home
            </router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Diary
              </a>
              <div class="navbar-dropdown is-boxed">
                <router-link class="navbar-item" to="/monthly">
                  Monthly
                </router-link>
                <router-link class="navbar-item" to="/tasks">
                  Tasks
                </router-link>
                <hr class="navbar-divider">
                <router-link class="navbar-item" to="/about">
                  About me
                </router-link>
                <router-link class="navbar-item" to="/issue">
                  Report an Issue
                </router-link>
              </div>
            </div>
          </div>
          <div class="container">
          <div class="navbar-end">
            
            <div class="navbar-item">
              <notifications />
              <login-badge />
            </div>
            </div>
          </div>
        </div>
    </nav>
</template>

    <style>
    .navbar{
      background-color: rgb(217, 217, 248);
    }
    </style>