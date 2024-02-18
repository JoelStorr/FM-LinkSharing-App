<template>
    <div class="bg-color-element"></div>
    <div class="nav">
        <NuxtLink to="/editor" >Back to Editor</NuxtLink>
        <button>Share Link</button>
    </div>
    <div class="contact-card-holder">
        <div class="contact-card">
            <div class="imageOutline">
                <img src="/images/icon-profile-details-header.svg" class="profileImage"/>

            </div>
            <h3>Ben Wright</h3>
            <p>ben@example.com</p>
            <div class="mockIcons black">
                <img src="/images/icon-github.svg" />
                <p>GitHub</p>
                <img src="/images/icon-arrow-right.svg"/>
            </div>
            <div class="mockIcons red">
                <img src="/images/icon-youtube.svg" />
                <p>YouTube</p>
                <img src="/images/icon-arrow-right.svg"/>
            </div>
            <div class="mockIcons blue">
                <img src="/images/icon-linkedin.svg" />
                <p>LinkedIn</p>
                <img src="/images/icon-arrow-right.svg"/>
            </div>
        </div>
    </div>

</template>


<style scoped>
    .nav{
        box-sizing: border-box;
        width: 100%;
        height: 10%;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        border-radius: 15px;
        margin-bottom: 100px;
    }

    .bg-color-element{
        position: absolute;
        top:0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 30vh;
        background-color: #623CFF ;
        border-radius: 0 0 25px 25px;
    }

    .imageOutline{
        width: 100px;
        height: 100px;
        border: #623CFF 4px solid;
        border-radius: 50%;
    }

    .profileImage{
        width: 100px;
        height: 100px;
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
        background-color: aqua;
    }

    .contact-card {
        background-color: white;
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        box-shadow: 5px 5px 20px black ;
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

</style>