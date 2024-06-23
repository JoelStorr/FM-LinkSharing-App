<template>
  <button
    @click="emit('onClick')"
    :disabled="props.disabled"
    :type="props.type"
  >
    <slot />
  </button>
</template>

<script setup>
  import './primary.css';

const props = defineProps({
  disabled: Boolean,
  type: String,
});

const emit = defineEmits(["onClick"]);
</script>


