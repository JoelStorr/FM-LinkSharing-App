<template>
  <div id="dropdown-holder">
    <div @click="changeToggle" class="dropdown-field" :class="toggle ? 'active' : '' ">
      <div v-if="activeElement.name == null" class="field-content">
        <img src="/images/icon-link.svg" />
        <p>Dropdown Field</p>
        <img
          src="/images/icon-chevron-down.svg"
          :class="toggle ? 'arrowUp' : ''"
        />
      </div>
      <div v-else class="field-content">
        <img :src="activeElement.icon" />
        <p>{{ activeElement.name }}</p>
        <img
          src="/images/icon-chevron-down.svg"
          :class="toggle ? 'arrowUp' : ''"
        />
      </div>
    </div>
    <div v-if="toggle" class="options-container">
      <div
        v-for="option in options"
        :key="option.name"
        class="dropdown-item"
        :class="option.name == activeElement.name ? 'activeEl' : ''"
        @click="setActiveElement(option)"
      >
        <div>
          <img :src="option.icon" />
          <p>{{option.name == activeElement.name ? option.name + ' (Selected)' : option.name}}</p>
        </div>
        <hr v-if="option.name !== options[options.length - 1].name" />
      </div>
    </div>
  </div>
</template>

<script setup>
// {id:String name: String, icon: String}
const props = defineProps({
    options: Array,
    name: String,
    icon: String
});

const emits = defineEmits(['setActiveElement'])

let toggle = ref(false);
let selected = ref(null);
let activeElement = ref({ name: props.name, icon: props.icon });

function changeToggle() {
  toggle.value = !toggle.value;
}


function setActiveElement(el) {
  console.log(el)

  activeElement.value = { name: el.name, icon: el.icon, link: el.link}
    toggle.value = !toggle.value
    emits('setActiveElement', activeElement.value)
}
</script>

<style scoped>

#dropdown-holder{
  position: relative;
}

.dropdown-field {
  padding: 0.5rem 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  background-color: white;
}

.dropdown-field:hover{
    cursor: pointer;
}

.field-content {
  display: flex;
  flex-direction: row;
}

.field-content p {
  flex: 1;
  margin: 0 0 0 1rem;
  padding: 0.5rem 0;
}

.arrowUp {
  transform: rotate(180deg);
}

.active{
     border: 1px solid #623CFF;
    box-shadow: 0 0 20px #BEADFF;
}

.dropdown-item div {
  display: flex;
}

.activeEl img {
    filter: brightness(0) saturate(100%) invert(27%) sepia(93%) saturate(3954%) hue-rotate(245deg) brightness(97%) contrast(108%);
}
.activeEl p {
  color: #623cff;
}

.options-container{
    position: absolute;
    z-index: 5;
    margin-top: 2rem ;
    padding: 0 1.5rem;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    width: 90%;
    height: 25rem;
    background-color: white;
    overflow: scroll;
}

.options-container:hover{
    cursor: pointer;
}

.options-container p {
    margin-left: 1rem;
}

hr{
    border: none;
    border-top: 1px solid #D9D9D9 ;
    height: 0;
}

</style>
