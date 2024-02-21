<template>
    <idv id="link-edit">
        <div class="header">
                <div class="header-link-number">
                    <img src="/images/icon-drag-and-drop.svg" />
                    <h2>Link # {{ props.linkNumber }}</h2>
                </div>
            
            <button>Remove</button>
        </div>
        <p>Platform</p>
        <UIDropdown :options="DropdownOptions" @set-active-element="onActiveElement" />

        <p>Link</p>
        <UITextField type="string"  :placeholder-text="activeLinkElement.link">
            <img :src="activeLinkElement.icon"/>
        </UITextField>

    </idv>


</template>


<script setup>

    import { DropdownOptions } from '../Helper';

    const props = defineProps({
        linkNumber: Number
    });

    const activeLinkElement = ref({id: null, name: null, icon: "/images/icon-links-header.svg", link: null})


    function onActiveElement(value){
        activeLinkElement.value = value;
    }
</script>


<style scoped>

    #link-edit{
        min-width: 100%;
        padding: 0;
        background-color: #FAFAFA;
        border-radius: 2.5rem;
        padding: 2rem;
    }


    #link-edit button{
        background-color: rgba(0,0,0,0);
        border: none;
        color: #737373;

    }

    #link-edit p{
        margin: 0;
        padding: 1rem 0 .2rem 0;
        font-size: 1rem;
    }

    .header{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header-link-number{
        display: flex;
        flex-direction: row;
    }

    .header-link-number h2{
        padding-left: 1rem;
        color: #737373;
    }
</style>