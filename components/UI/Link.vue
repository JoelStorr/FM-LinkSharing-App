<template>
<div class="link" :class="bgColor">
    <img :src="props.iconSrc" class="icon"/>
    <p>{{ props.name }}</p>
    <img src="/images/icon-arrow-right.svg"/>
</div>


</template>


<script setup>

    const props = defineProps({
        iconSrc: String,
        name: String
    });

    console.log(typeof(props.name))

    const bgColor = computed(()=>{
        switch(props.name){
            case 'GitHub':
                return "black";
            case "YouTube":
                return "red";
            case "LinkedIn":
                return "blue";
            default:
                return "blue"
        }

    })



</script>


<style scoped>
    .link{
        background-color: black;
        display: flex;
        width: 100%;
        border-radius: .5rem;
        padding: 0 1rem;
    }

    .link:hover{
        cursor: pointer;
    }

    p{
        margin: 1rem 1rem;
        flex: 1;
        color: white;
    }

    .icon{
        filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(44%) hue-rotate(56deg) brightness(114%) contrast(100%);
        scale: 1.2;
    }

    .black{
        background-color: #1A1A1A;
    }
    .red{
        background-color: #EE3939;
    }
    .blue{
        background-color: #2D68FF;
    }


</style>