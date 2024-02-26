<template>
  <h1>Index Page</h1>
  {{ data }}
</template>

<script setup>
// definePageMeta({
//   middleware: [
//     function (to, from) {
//       return navigateTo("/editor");
//     },
//   ],
// });

import { useMainStore } from "~/store/index";

const store = useMainStore();
const { add, remove, getShareProfile, loginUser } = store;

// async function loginUser(email, password) {
//   const myHeaders = new Headers();
//   myHeaders.append("Accept", "application/json");
//   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

//   const formdata = new FormData();
//   formdata.append("username", email);
//   formdata.append("password", password);

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: formdata,
//     redirect: "follow",
//   };

//   await fetch("http://127.0.0.1:8000/auth/token", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// }


  const formdata = new FormData();
  formdata.append("username", "test@test.com");
  formdata.append("password", "test1234567890");

const axios = useNuxtApp().$axios

let data = await loginUser("test@test.com","test1234567890")



</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
