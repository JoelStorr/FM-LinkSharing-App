<template>
  <div
    class="textfieldHolder"
    :class="props.error ? 'errorState' : 'normalState'"
  >
    <slot />
    <input
      :type="props.type"
      @input="handleChange"
      :class="props.error ? 'inputeError' : ''"
      :placeholder="placeholderText"
      :id="props.fieldId"
      :value="props.value"
    />
    <p class="errorText">
      <slot name="error" />
    </p>
  </div>
</template>

<script setup>
import './textfield.css';
const text = ref("");

const emits = defineEmits(["onValueChange"]);

const props = defineProps({
  type: String,
  error: Boolean,
  placeholderText: String,
  fieldId: String,
  value: String,
});

function handleChange(event) {
  emits("onValueChange", event.target.value);
}
</script>
