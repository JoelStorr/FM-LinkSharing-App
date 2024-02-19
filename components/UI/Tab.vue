<template>

    <button class="tag" :class="props.active ? 'active' : ''" @click="emits('clicked')">
        <img :src="props.imgSrc" />
        <p><slot /></p>
    </button>

</template>

<script setup>
    const props = defineProps({
        imgSrc: String,
        active: Boolean
    });

    const emits = defineEmits('clicked');
</script>

<style scoped>
    .tag{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 1rem 1.5rem;
        background-color: rgba(0,0,0,0);
        border: none;
        border-radius: .5rem;
    }

    .tag p{
        margin: 0;
        padding: 0;
        margin-left: .5rem;
        color: #737373;
    }

    .tag:hover p {
        color: #633CFF;
    }

    .tag:hover img{
        filter: brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(3954%) hue-rotate(245deg) brightness(97%) contrast(108%);
    }

    .active{
        background-color: #EFEBFF;
    }

    .active p{
        color: #633CFF;
    }

    .active img{
        filter: brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(3954%) hue-rotate(245deg) brightness(97%) contrast(108%);
    }
</style>