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
        background-color: #623CFF ;
        border: none;
        color: white;
        padding: 1rem 5rem;
        border-radius: 10px;
    }

    button:active {
        background-color: #BEADFF;
    }

    button:disabled{
        background-color: #EFEBFF;
    }
</style>