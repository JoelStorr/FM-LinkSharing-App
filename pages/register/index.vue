<template>
    <h1>devlinks</h1>
    <div>
        <h2>Create account</h2>
        <p>Let's get you started sharing you links!</p>
        <form @submit.prevent="login" >
            <label for="email">
                Email address
                <input id="email" type="email" placeholder="eg.alex@email.com" v-model="email" />
            </label>
            <label for="password">
                Create password
                <input id="password" type="password" placeholder="At least 8 characters" v-model="password">
            </label>
            <label for="passwordConfirm">
                Confirm password
                <input id="passwordConfirm" type="password" placeholder="At least 8 characters" v-model="confirmPassword">
            </label>
            <p>Password must contain at least 8 characters</p>
            <button type="submit">Create a new Accout</button>
        </form>

        <p>Already have an account? <NuxtLink to="/login">Login</NuxtLink> </p>
        
    </div>
    
</template>

<script setup>
import { ref } from 'vue';


const email = ref("")
const password = ref("")
const confirmPassword = ref("")

function login(){

}

</script>