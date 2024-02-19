<template>
    <button @click="emit('onClick')" :disabled="props.disabled" :type="props.type">
        <slot />
    </button>

</template>


<script setup>


     const props = defineProps({
        disabled: Boolean,
        type: String
    })

    const emit = defineEmits(['onClick']);


</script>

<style scoped>

    button{
        background-color: #623CFF ;
        border: none;
        color: white;
        padding: 1.3rem 5rem;
        border-radius: 10px;
        font-size: 1.6rem;
    }

    button:active {
        background-color: #BEADFF;
    }

    button:disabled{
        background-color: #EFEBFF;
    }
</style>