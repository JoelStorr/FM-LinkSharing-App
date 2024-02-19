<template>

    <div id="editor-view">

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
    </div>
</template>


<script setup>
import { ref } from 'vue';



    const isLinkEditor = ref(true)

    function setLinkEditor(){
        isLinkEditor.value = true
    }

    function setProfileEditor(){
        console.log('set Profile editor')
        isLinkEditor.value = false
    }

    function btnClick(){
        console.log("Button Clicked")
    }


</script>

<style scoped>

    #editor-view{
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        background-color: #FAFAFA;
        padding: 2rem;
        
        display: flex;
        flex-direction: column;
    }


    .phonePreview{
        width: 40%;
        flex-flow: column;        
        background-color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2.5rem;
       
    }


    .mainView{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        margin-top: 3rem;
        flex: 1;
        
    }


    .editor{
        width: 58%;
        height: 100%;
        background-color: white;
        border-radius: 2.5rem;
        display: flex;
    }

</style>