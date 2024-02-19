<template>

    <div id="preview">
        <div class="bg-color-element"></div>
        <div class="nav">
           
            <UIButtonSecondary @on-click="goBack">Back to Editor</UIButtonSecondary>
            <!-- TODO: Copy URL -->
            <UIButtonPrimary>Share Link</UIButtonPrimary>
    
        </div>
        <div class="contact-card-holder">
            <div class="contact-card">
                <div class="imageOutline">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="profileImage"/>
    
                </div>
                <h1>Ben Wright</h1>
                <p>ben@example.com</p>
               
                <UILink class="ui-link" iconSrc="/images/icon-github.svg" name="GitHub"/>
                <UILink class="ui-link" iconSrc="/images/icon-youtube.svg" name="YouTube"/>
                <UILink iconSrc="/images/icon-linkedin.svg" name="LinkedIn"/>
            </div>
        </div>

    </div>


</template>

<script setup>

    function goBack(){
        navigateTo("/editor");
    }


</script>


<style scoped>

    #preview{
        
        position: relative;
        width: 100vw;
        height: 100vh;
        padding: 2rem;
        
        display: flex;
        flex-direction: column;
    }

    .nav{
        position: relative;
        box-sizing: border-box;
        width: auto;
        height: 10%;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        border-radius: 15px;
        margin-bottom: 100px;
    }
    h1{
        margin: 0;
        padding: 0;
    }

    .bg-color-element{
        position: absolute;
        top:0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 35vh;
        background-color: #623CFF ;
        border-radius: 0 0 25px 25px;
    }

    .imageOutline{
        width: 100px;
        height: 100px;
        border: #623CFF 4px solid;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1.5rem;
    }

    .profileImage{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    p{
        margin-bottom: 5rem;
    }

    .mockIcons{
        width: 80%;
        margin: 10px;
        padding: 5px;
        display: flex;
        border-radius: 5px;
    }
    .contact-card-holder{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center; 
    }

    .contact-card {
        background-color: white;
        min-width: 18%;
        max-width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem ;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3) ;
        border-radius: 20px; 
    }

    .red{
        background-color: red;
        color: white;
    }

    .blue{
        background-color: blue;
        color: white;
    }

    .black{
        background-color: black;
        color: white;
    }


    .ui-link{
        margin-bottom: 1.5rem;
    }
</style>