<template>
    <NavBar />
    <div class="mainView">
        <div class="phonePreview">
            <img src="/images/illustration-phone-mockup.svg" />
        </div>
        <div class="linkArea">
            <h2>Customize your links</h2>
            <p>Add/edit/remove links below and then share all your profiles  with the world</p>
            <button>+Add new ink</button>
            <div >
                <img src="/images/illustration-empty.svg" >
                <h3> Let's get you started</h3>
                <p>Use the "Add new link" button to get started Once you have more then one link, you can reorder and edit them. We're here to help you share your profiles with everyone</p> 
            </div>
            <hr />
            <button>Save</button>
        </div>

    </div>
</template>


<script setup>
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

    .linkArea{
        width: 58%;
        background-color: white;
    }

</style>