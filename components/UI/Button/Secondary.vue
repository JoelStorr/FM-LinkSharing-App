<template>
  <button @click="emit('onClick')" :disabled="props.disabled">
    <span :class="props.iconOnly ? 'btn-icon' : ''">
      <slot name="icon"></slot>
    </span>
    <span :class="props.iconOnly ? 'btn-text' : ''">
      <slot name="text"></slot>
    </span>
  </button>
</template>

<script setup>
import './secondary.css'
const props = defineProps({
  disabled: Boolean,
  iconOnly: Boolean,
});

const emit = defineEmits(["onClick"]);
</script>


