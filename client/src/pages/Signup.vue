<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '../models/session';

const session = useSession();

  const firstname = ref('');
  const lastname = ref('');
  const handle = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const pic = ref('');

function signup(){
    session.signup(firstname.value, lastname.value, handle.value, email.value, password.value, confirmPassword.value, pic.value);
}
</script>

<template>
  <div class="columns is-centered">
        <div class="section card">
            <form @submit.prevent="signup">
            <img src="https://img.icons8.com/external-bearicons-flat-bearicons/64/000000/external-signup-call-to-action-bearicons-flat-bearicons.png"/>
            <h1 class="title">Sign Up</h1>
            <div class="field">
                <h3>First Name</h3>
                <p class="control">
                    <input class="input" type="name" required placeholder="eg Joe" v-model="firstname">
                </p>
                <h3>Last Name</h3>
                <p class="control">
                    <input class="input" type="name" required placeholder="eg Biden" v-model="lastname">
                </p>
            </div>
            <div class="field">
                <h3>Email</h3>
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" required placeholder="abc@example.com" v-model="email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
                <p>Create Handle
                    <input class="input" type="handle" required placeholder="coolkid01" v-model="handle">
                </p>
                <h3>Set Password</h3>
                <p class="control has-icons-left">
                    <input class="input" type="password" required placeholder="*****" v-model="password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
                <h3>Confirm Password</h3>
                <p class="control has-icons-left">
                    <input class="input" type="password" required placeholder="*****" v-model="confirmPassword">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
                <h3>Profile Pic</h3>
                <p class="control has-icons-left">
                    <input class="input" type="text" required placeholder="Image url" v-model="pic">
                    <span class="icon is-small is-left">
                        <i class="fas fa-person"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button">
                        <span class="icon">
                            <img src="https://img.icons8.com/office/30/000000/add-user-male--v1.png"/>
                        </span>
                        <span>Create profile</span>
                    </button>
                </p>
            </div>
            <img src="https://img.icons8.com/bubbles/50/000000/gmail-new.png"/>
             <!-- <img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png"/> -->

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