<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession } from '../models/session';
    const session = useSession();

    const email = ref('');
    const password = ref('');
        
    function login() 
    {
        session.Login(email.value, password.value);
    }
</script>

<template>
    <div class="columns is-centered">
        <div class="section card">
            <form @submit.prevent="login">
                <h1 class="title">Login</h1>
                <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Email" v-model="email">
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
                            <input class="input" type="password" placeholder="Password" v-model="password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                
                    <div class="field">
                        <p class="control">
                            <button class="button">
                            <span class="icon">
                                <i class="fa fa-sign-in"></i>
                            </span>
                            <span>Login</span>
                            </button>
                        </p>
                    </div>
                    </form>
                    <div>
                        <p>Don't have an account?
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