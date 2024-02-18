<template>
    <div class="linkArea">
            <h2>Customize your links</h2>
            <p>Add/edit/remove links below and then share all your profiles  with the world</p>
            <button>+Add new ink</button>
            <div >
                <img src="/images/illustration-empty.svg" >
                <h3> Let's get you started</h3>
                <p>Use the "Add new link" button to get started Once you have more then one link, you can reorder and edit them. We're here to help you share your profiles with everyone</p> 
            </div>

            <TextField type="text" @onValueChange="logger" :error="false" placeholderText="Enter your email pelease">
                <img src="/images/icon-link.svg" />
                <template v-slot:error>This is error text</template>
            </TextField>
            <Dropdown :options="options" />
            <hr />
            <button>Save</button>
        </div>

</template>


<script setup>

import TextField from '~/components/UI/TextField.vue';
import Dropdown from '../UI/Dropdown.vue';

    let options = [
        {
            id: 'github',
            name: 'Github',
            icon: 'images/icon-github.svg'
        },
        {
            id: 'youtube',
            name: 'YouTube',
            icon: 'images/icon-youtube.svg'
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            icon: 'images/icon-linkedin.svg'
        }
    ]

    function logger(value){
        console.log(value)
    }

</script>

<style scoped>
      .linkArea{
        position: relative;
        width: 100%;
        background-color: white;
    }
</style>