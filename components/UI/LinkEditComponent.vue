<template>
  <div id="link-edit">
    <div class="header">
      <div class="header-link-number">
        <img src="/images/icon-drag-and-drop.svg" class="handle" alt="icon"/>
        <h2>Link # {{ linkNumber }}</h2>
      </div>

      <button @click="removeLink">Remove</button>
    </div>
    <p>Platform</p>
    <UIDropdown
      :options="DropdownOptions"
      @set-active-element="onActiveElement"
      :name="activeLinkElement.name"
      :icon="activeLinkElement.icon"
    />

    <p>Link</p>
    <UITextField
      type="string"
      :value="activeLinkElement.link"
      :placeholder-text="activeLinkElement.placeholder"
      @on-value-change="linkValidation"
      :error="hasError"
    >
      <img :src="activeLinkElement.icon" alt="icon"/>
      <template v-slot:error>
        {{ errorMessage }}
      </template>
    </UITextField>
  </div>
</template>

<script setup>
import { DropdownOptions } from "../Helper";
import { useMainStore } from "~/store/index";
import './linkEditComponent.css';

const props = defineProps({
  link: Object,
});

const store = useMainStore();
const { add, remove, getIndex } = store;

const emits = defineEmits(["linkadded", "removeEl"]);

const activeLinkElement = ref({
  id: props.link.id ? props.link.id : null,
  name: props.link.name ?? null,
  icon: props.link.icon ?? "/images/icon-links-header.svg",
  link: props.link.link ?? null,
  placeholder: props.link.placeholder ?? null,
});

const hasError = ref(false);
const errorMessage = ref("");
const id = props.link.id;
const linkValidated = ref(false);

const linkNumber = computed(() => {
  return getIndex(props.link.id) + 1;
});

function onActiveElement(value) {
  activeLinkElement.value = {
    ...activeLinkElement.value,
    name: value.name,
    icon: value.icon,
    link: activeLinkElement.value.link,
    placeholder: value.link,
  };

  if (
    isValidUrl(activeLinkElement.value.link) &&
    activeLinkElement.value.id != null
  ) {
    add(activeLinkElement.value);
    emits("linkadded");
  }
}

function isValidUrl(string) {
  const pattern = new RegExp(
    "^([a-zA-Z]+:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(string);
}

let time = null;

function linkValidation(value) {
  if (time != null) {
    clearTimeout(time);
  }

  time = setTimeout(() => {
    if (value.length < 1) {
      errorMessage.value = "Can't be empty";
      hasError.value = true;
      activeLinkElement.value = {
        ...activeLinkElement.value,
        link: value,
      };
    }

    if (isValidUrl(value)) {
      errorMessage.value = "";
      hasError.value = false;

      activeLinkElement.value = {
        ...activeLinkElement.value,
        link: value,
      };

      linkValidated.value = true;
      add(activeLinkElement.value);
      emits("linkadded");
    } else {
      errorMessage.value = "Please check the URL";
      hasError.value = true;
      activeLinkElement.value = {
        ...activeLinkElement.value,
        link: value,
      };
    }
  }, 1000);
}

function removeLink() {
  remove(activeLinkElement.value.id);
  emits("linkadded");
}
</script>


