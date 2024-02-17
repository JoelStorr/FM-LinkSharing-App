<template>
    <img src="/images/logo-devlinks-large.svg"/>
    <h1>devlinks</h1>
    <div>
        <h2>Login</h2>
        <p>Add your details below to get back inot the app</p>
        <form @submit.prevent="login" >
            <label for="email">
                Email address
                <input id="email" type="email" placeholder="eg.alex@email.com" v-model="email" />
            </label>
            <label for="password">
                Password
                <input id="password" type="password" placeholder="Enter your password" v-model="password">
            </label>
            <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <NuxtLink to="/register">Create account</NuxtLink> </p>
        
    </div>
    
</template>

<script setup>
import { ref } from 'vue';


const email = ref("")
const password = ref("")

function login(){

}

</script>