
<script setup lang="ts">
import router from '../router';
import { list } from '../models/user';
import { reactive } from 'vue';

const newUser = reactive({
      firstname: "",
      lastname: "",
      handle: "",
      email: "",
      password: "",
      confirmPassword: "",
      pic: ""
  })

function handleSubmit(){
    if(newUser){
        if(newUser.password !== newUser.confirmPassword){
            alert("Error!! Passwords donot match!");
        }
        else{
            list.push(
              {
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                handle: newUser.handle,
                email: newUser.email,
                password: newUser.password,
                pic: "",
                id: list.length + 1
              }
        )
        newUser.firstname = "";
        newUser.lastname = "";
        newUser.email = "";
        newUser.password = "";
        newUser.confirmPassword = "";
        } 
        router.push("/")
    }
}
</script>

<template>
  <div class="columns is-centered">
        <div class="section card">
            <form @submit.prevent="handleSubmit">
            <img src="https://img.icons8.com/office/80/000000/harry-potter-.png"/>
            <h1 class="title">Sign Up</h1>
            <div class="field">
                <h3>First Name</h3>
                <p class="control">
                    <input class="input" type="name" required placeholder="Your First Name" v-model="newUser.firstname">
                </p>
                <h3>Last Name</h3>
                <p class="control">
                    <input class="input" type="name" required placeholder="Your Last Name" v-model="newUser.lastname">
                </p>
            </div>
            <div class="field">
                <h3>Email</h3>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" required placeholder="Your Email" v-model="newUser.email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
                <h3>Set Password</h3>
                <p class="control has-icons-left">
                    <input class="input" type="password" required placeholder="Set Password" v-model="newUser.password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
                <h3>Confirm Password</h3>
                <p class="control has-icons-left">
                    <input class="input" type="password" required placeholder="Confirm Password" v-model="newUser.confirmPassword">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button">
                      <!-- @click="signup" -->
                    <span class="icon">
                        <img src="https://img.icons8.com/office/30/000000/add-user-male--v1.png"/>
                    </span>
                    <span>Create profile</span>
                    </button>
                </p>
            </div>
            <img src="https://img.icons8.com/bubbles/50/000000/gmail-new.png"/>
            <img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png"/>

            </form>
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
</style>