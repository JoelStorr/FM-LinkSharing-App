<template>

    <div>
        <div>
            <img src="/images/logo-devlinks-small.svg" />
            <h1>devlinks</h1>

        </div>

        <NuxtLink to="/editor" >Links</NuxtLink>
        <NuxtLink to="/profile">Profile Details</NuxtLink>


        <NuxtLink to="/preview">Preview</NuxtLink>
    </div>





</template>



<script setup>

   const props = defineProps({
        isLink: Boolean
    });


</script>


<style scoped>
    div{
        margin: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

</style>