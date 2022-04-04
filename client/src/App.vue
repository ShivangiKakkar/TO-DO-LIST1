<script setup lang="ts">
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <Nav />
    <div class="container">
        <router-view />
    </div>
    <Footer />
    
</template>

<style>
  
</style>
