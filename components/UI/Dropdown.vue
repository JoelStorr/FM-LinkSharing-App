<template>
  <div id="dropdown-holder">
    <div
      @click="changeToggle"
      class="dropdown-field"
      :class="toggle ? 'active' : ''"
    >
      <div v-if="activeElement.name == null" class="field-content">
        <img src="/images/icon-link.svg" alt="icon"/>
        <p>Dropdown Field</p>
        <img
          src="/images/icon-chevron-down.svg"
          :class="toggle ? 'arrowUp' : ''"
          alt="icon"
        />
      </div>
      <div v-else class="field-content">
        <img :src="activeElement.icon" alt="icon"/>
        <p>{{ activeElement.name }}</p>
        <img
          src="/images/icon-chevron-down.svg"
          :class="toggle ? 'arrowUp' : ''"
          alt="icon"
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
          <img :src="option.icon" alt="icon"/>
          <p>
            {{
              option.name == activeElement.name
                ? option.name + " (Selected)"
                : option.name
            }}
          </p>
        </div>
        <hr v-if="option.name !== options[options.length - 1].name" />
      </div>
    </div>
  </div>
</template>

<script setup>
import './dropdown.css';

// {id:String name: String, icon: String}
const props = defineProps({
  options: Array,
  name: String,
  icon: String,
});

const emits = defineEmits(["setActiveElement"]);

let toggle = ref(false);
let selected = ref(null);
let activeElement = ref({ name: props.name, icon: props.icon });

function changeToggle() {
  toggle.value = !toggle.value;
}

function setActiveElement(el) {
  activeElement.value = { name: el.name, icon: el.icon, link: el.link };
  toggle.value = !toggle.value;
  emits("setActiveElement", activeElement.value);
}
</script>


