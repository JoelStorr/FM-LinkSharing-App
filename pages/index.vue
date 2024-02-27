<template>
  <h1>Index Page</h1>
  <p>
    {{ data }}

  </p>
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
const { add, remove, getShareProfile, loginUser, registerUser } = store;





// let data = await loginUser("test2@test.com","test1234567890")
// let token = useCookie('access_token');
// token.value = data


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
