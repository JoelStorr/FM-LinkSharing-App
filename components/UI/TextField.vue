<template>

    <div class="textfieldHolder" :class="props.error ? 'errorState' : 'normalState'">
        <slot />
        <input :type="props.type" @input="handleChange" :class="props.error ? 'inputeError' : ''" :placeholder="placeholderText"/>
        <p class="errorText">
            <slot name="error" />
        </p>
    </div>
</template>


<script setup>

const text = ref("")

const emits =defineEmits(['onValueChange'])

const props = defineProps({
    type: String,
    error: Boolean,
    placeholderText: String

});

function handleChange(event){
    emits('onValueChange', event.target.value)
};


</script>


<style scoped>

    .textfieldHolder{
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 10px;
        margin: 0;
        padding: 0.5rem 1rem;
    }

    .normalState{
        border: 1px solid #D9D9D9;
    }
    
    .errorState{
        border: 1px solid #FF3939;
        color: #FF3939;
    }

    input{
        height: 80%;
        flex: 1;
        width: 150px;
        border: none;
        font-size: 1.6rem;
         margin: 0 0 0 1rem;
    }

    .inputeError{
        color:#FF3939;
    }

    input:focus{
        outline: none;
    }


    .textfieldHolder:focus-within {
        border: 1px solid #623CFF;
        box-shadow: 0 0 20px #BEADFF;
    }

    .errorText {
        color: #FF3939;
        font-size: 1.2rem;
    }

</style> 