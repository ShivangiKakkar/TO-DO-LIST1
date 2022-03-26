<script lang="ts">
import { Login } from '../models/session';  
import { defineComponent, reactive } from "vue";
import { RouterLink } from 'vue-router';

    export default defineComponent({
        setup() {
            const state = reactive({
                userEmail: "",
                userPassword: "",
                todoText: "",
            });


            function login() {
                console.log(state.userEmail, state.userPassword)
                Login(state.userEmail, state.userPassword)
            }
            return {
                state,
                login   
            }; 
            },
        });
</script>

<template>
    <div class="columns is-centered">
        <div class="section card">
            <h1 class="title">Login</h1>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" v-model="state.userEmail">
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
                    <input class="input" type="password" placeholder="Password" v-model="state.userPassword">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
           
            <div class="field">
                <p class="control">
                    <button class="button" @click="login">
                    <span class="icon">
                        <i class="fa fa-sign-in"></i>
                    </span>
                    
                    <span>Login</span>
                    </button>
                </p>
            </div>
             <div>
                <p class="field">Don't have an account?
                    <router-link class="signup_img" to="/signup">
                        <img src="https://img.icons8.com/external-bearicons-gradient-bearicons/40/000000/external-Sign-Up-social-media-bearicons-gradient-bearicons.png"/>
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>






<style scoped>
.section{
    margin-top: 70px;
}
.card{
    background-color: rgb(250, 216, 227);
}
.button{
    background-color:rgb(250, 175, 201);
}
.signup_img{
  height: 40px;
  vertical-align: middle;
} 
</style>