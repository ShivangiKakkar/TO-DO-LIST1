<script setup lang="ts">
    import session, { Logout } from "../models/session";
</script>

<template>
    <div class="buttons" v-if="!session.user">
        <router-link class="button is-warning is-light" to="/signup">
            Sign up
        </router-link>
        <router-link class="button is-warning is-light" to="/login">
            Log in
        </router-link>
    </div>
    <div class="buttons" v-else>
        <div class="avatar">
            <img :src="session.user.pic" />
            <div>
                <strong>{{ session.user.firstName }} {{ session.user.lastName }}</strong> <br />
                <i>{{ session.user.email }}</i>
            </div>
        </div>
        <a class="button is-primary" @click="Logout()">
            <strong>Log out</strong>
        </a>
    </div>
</template>

<style scoped>
     

</style>