<script setup lang="ts">
import { Login } from '../models/session';

    
    function login() 
    {
        Login('Shivangi Kakkar', 'coffee')
    }
</script>
<template>
    <div class="columns is-centered">
        <div class="section card">
            <h1 class="title">Login Page</h1>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-warning" @click="login">
                    <span class="icon">
                        <i class="fa fa-sign-in"></i>
                    </span>
                    <span>Login</span>
                    </button>
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>