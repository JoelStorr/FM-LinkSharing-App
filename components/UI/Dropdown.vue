

<template>
    <div @click="changeToggle" class="dropdown-field">
        <img src="/images/icon-link.svg" />
        <p>Dropdown Field</p>
        <img src="/images/icon-chevron-down.svg" :class="toggle ? 'arrowUp':''"/>
    </div>
    <div v-if="toggle">
        <div v-for=" option in options " :key="option.id" class="dropdown-item">
            <div>
                <img :src="option.icon" />
                <p>{{ option.name }}</p>

            </div>
            <hr v-if="option.id !== options[options.length - 1].id"/>
        </div>
    </div>


</template>

<script setup lang="ts">

    const props = defineProps<{
        options: {id: string, name: string, icon: string }[]
    }>()
 
    let toggle = ref(false);
    let selected = ref(null)

    function changeToggle(){
        toggle.value = !toggle.value
    }

    function lastItem(el: string):boolean{
        return el !== props.options[-1].id;
    }

</script>


<style scoped>

    .dropdown-field{
        display: flex;
        flex-direction: row;
        padding: 0.5rem 1rem;
        border: 1px solid #D9D9D9;
        border-radius: 1rem;
    }
    .dropdown-field p {
        flex:1;
        margin: 0 0 0 1rem;
        padding: .5rem 0;
    }

    .arrowUp{
        transform: rotate(180deg);
    }

    .dropdown-item div{
        display: flex;
    }

</style>