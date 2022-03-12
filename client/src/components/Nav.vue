<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
  const isOpen = ref(true);
</script>

<template>
<nav class="navbar is-warning">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://img.icons8.com/external-becris-solid-becris/64/000000/external-calendar-literary-genres-becris-solid-becris.png"/>
            <span class="calendar-icon">Calendar</span>
          </a>

          <div class="navbar-burger" data-target="navbarExampleTransparentExample"  :class="{'is-active': isOpen}" @click="isOpen = !isOpen">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div id="navbarExampleTransparentExample" class="navbar-menu" :class="{'is-active': isOpen}">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/">
              Home
            </router-link>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Diary
              </a>
              <div class="navbar-dropdown is-boxed">
                <router-link class="navbar-item" to="/overview">
                  Overview
                </router-link>
                <router-link class="navbar-item" to="/monthly">
                  Monthly
                </router-link>
                <router-link class="navbar-item" to="/calendar">
                  Calendar
                </router-link>
                <hr class="navbar-divider">
                <router-link class="navbar-item" to="/events">
                  Events
                </router-link>
                <router-link class="navbar-item" to="/tasks">
                  Tasks
                </router-link>
              </div>
            </div>
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button is-white is-light" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://www.linkedin.com/in/shivangikakkar15/">
                    <span class="icon">
                      <i class="fab fa-linkedin"></i>
                    </span>
                    <span>
                      LinkedIn
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-white is-light" href="https://www.calendarlabs.com/templates/2022/2022-printable-calendar-pdf-03.pdf">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="navbar-item">
              
              <!-- <div class="field is-grouped">
                <p class="control">
                  <router-link class="button is-dark" to="/signup">
                    <span>Sign Up</span>
                  </router-link>
                </p>
                <p class="control">
                  <router-link class="button is-dark" to="/login">
                    <span>Login</span>
                  </router-link>
                </p>
              </div> -->
            </div>
          </div>
        </div>
    </nav>
</template>

    <style>
    </style>