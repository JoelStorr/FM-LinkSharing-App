<template>
    <button @click="emit('onClick')" :disabled="props.disabled">
        <div :class="props.iconOnly ? 'btn-icon' : ''">
            <slot  name="icon"></slot>

        </div>
        <div :class="props.iconOnly ? 'btn-text' : ''">
        <slot name="text"></slot>
        
        </div>
    </button>

</template>


<script setup>

    const props = defineProps({
        disabled: Boolean,
        iconOnly: Boolean
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

    .btn-icon{
        display: none;
    }

    @media only screen and (max-width: 450px) {

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;

        }
        .btn-icon{
            display: contents;

        }

        .btn-text{
            display: none;
        }
    }
</style>