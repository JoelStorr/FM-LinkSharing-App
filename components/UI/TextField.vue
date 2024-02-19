<template>

    <div class="textfieldHolder" :class="props.error ? 'errorState' : 'normalState'">
        <slot />
        <input :type="props.type" @input="handleChange" :class="props.error ? 'inputeError' : ''" :placeholder="placeholderText" :id="props.fieldId"/>
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
    placeholderText: String,
    fieldId: String,

});

function handleChange(event){
    emits('onValueChange', event.target.value)
};


</script>


<style scoped>

    .textfieldHolder{
        box-sizing: border-box;
        position: relative;
        max-height: 40px;
        min-width: 60%;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 10px;
        margin: 0;
        padding: 0.5rem 1rem;
        background-color: white;
    }

    .normalState{
        border: 1px solid #D9D9D9;
    }
    
    .errorState{
        border: 1px solid #FF3939;
        color: #FF3939;
    }

    input{
        position: relative;
        height: 80%;
        flex: 1;
        width: 80%;
        border: none;
        font-size: 1.6rem;
        font-weight: lighter;
        margin: 1rem 0 1rem 1rem;
        color: #333333;
    }

    input::placeholder{
        font-size: 1.4rem;
        font-weight:400;
        color: #737373;
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