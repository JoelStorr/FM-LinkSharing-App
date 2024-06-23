<template>
  <button
    class="tag"
    :class="props.active ? 'active' : ''"
    @click="emits('clicked')"
  >
    <img :src="props.imgSrc" alt="icon"/>
    <span class="mobile-text"><slot /></span>
  </button>
</template>

<script setup>
import './tab.css';
const props = defineProps({
  imgSrc: String,
  active: Boolean,
});

const emits = defineEmits("clicked");
</script>


