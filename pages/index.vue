<template>
  <h1>Index Page</h1>
</template>

<script setup>
definePageMeta({
  middleware: [
    function (to, from) {
      return navigateTo("/editor");
    },
  ],
});
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
