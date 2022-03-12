
<script setup lang="ts">

</script>

<template>
  <div class="columns is-centered">
        <div class="section card">
            <h1 class="title">Sign Up</h1>
            <div class="field">
                <p class="control">
                    <input class="input" type="name" placeholder="Your Name">
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Your Email">
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
                    <input class="input" type="password" placeholder="Set Password">
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
                        <i class="fa fa-user-plus"></i>
                    </span>
                    <span>Create profile</span>
                    </button>
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
</style>