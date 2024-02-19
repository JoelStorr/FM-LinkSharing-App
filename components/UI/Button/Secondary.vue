<template>
    <button @click="emit('onClick')" :disabled="props.disabled">
        <slot />
    </button>

</template>


<script setup>

    const props = defineProps({
        disabled: Boolean
    })

    const emit = defineEmits(['onClick']);


</script>

<style scoped>

    button{
        background-color: rgba(0,0,0,0) ;
        border: 1px solid #623CFF;
        color: #623CFF;
        padding: 1.2rem 4rem;
        border-radius: 10px;
        font-size: 1.6rem;
    }

    button:active {
        background-color: #EFEBFF;
        border: 1px solid #623CFF;
        color: #623CFF;

    }

    button:disabled{
        background-color: rgba(0,0,0,0);
         border: 1px solid #EFEBFF;
         color: #EFEBFF;
    }
</style>