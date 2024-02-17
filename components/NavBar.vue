<template>

    <div>
        <div>
            <img src="/images/logo-devlinks-small.svg" />
            <h1>devlinks</h1>

        </div>

        <button @click="onLinkEditorClick" >Links</button>
        <button  @click="onProfileEditorCLick">Profile Details</button>


        <NuxtLink to="/preview">Preview</NuxtLink>
    </div>





</template>



<script setup>

   const props = defineProps({
        isLinkEditor:Boolean
    });


    const emit = defineEmits(['setLinkEditor', 'setProfileEditor'])

    function onLinkEditorClick(){
        emit("setLinkEditor")
    }

    function onProfileEditorCLick(){
        emit("setProfileEditor")
    }

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