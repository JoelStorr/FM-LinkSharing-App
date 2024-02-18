<template>
    <NavBar isLinkEditor="isLinkEditor.value" @setLinkEditor="setLinkEditor" @setProfileEditor="setProfileEditor"/>
    

    <div class="mainView">
        <div class="phonePreview">
            <img src="/images/illustration-phone-mockup.svg" />
        </div>
        <div class="editor">
            <LinkEditor v-if="isLinkEditor"/>
            <ProfileEditor v-else/>
        </div>
        

    </div>
</template>


<script setup>
import { ref } from 'vue';



    const isLinkEditor = ref(true)

    function setLinkEditor(){
        isLinkEditor.value = true
    }

    function setProfileEditor(){
        isLinkEditor.value = false
    }

    function btnClick(){
        console.log("Button Clicked")
    }


</script>

<style scoped>
    .mainView{
        box-sizing: border-box;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: rgb(206, 206, 206);
        margin: 30px;
        padding: 20px;
    }

    .phonePreview{
        width: 40%;
        background-color:white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .editor{
        width: 58%;
        background-color: white;
    }

</style>