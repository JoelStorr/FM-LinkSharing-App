<template>
  <div id="link-edit">
    <div class="header">
      <div class="header-link-number">
        <img src="/images/icon-drag-and-drop.svg" class="handle" />
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
      <img :src="activeLinkElement.icon" />
      <template v-slot:error>
        {{ errorMessage }}
      </template>
    </UITextField>
  </div>
</template>

<script setup>
import { DropdownOptions } from "../Helper";
import { useMainStore } from "~/store/index";

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
  placeholder: props.link.placeholder ?? null
});

const hasError = ref(false);
const errorMessage = ref("");
const id = props.link.id;
const linkValidated = ref(false);

const linkNumber = computed(() => {
  return getIndex(props.link.id) + 1;
});

function onActiveElement(value) {

  console.log('Ran in update')

  activeLinkElement.value = {
    ...activeLinkElement.value,
    name: value.name,
    icon: value.icon,
    link: activeLinkElement.value.link,
    placeholder: value.link
      
  };

  if (isValidUrl(activeLinkElement.value.link) && activeLinkElement.value.id != null) {

    console.log("Ran after id validation")

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

<style scoped>
#link-edit {
  min-width: 100%;
  padding: 0;
  background-color: #fafafa;
  border-radius: 2.5rem;
  padding: 2rem;
  margin-bottom: 2rem;
}

#link-edit button {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #737373;
}

#link-edit p {
  margin: 0;
  padding: 1rem 0 0.2rem 0;
  font-size: 1rem;
}

.header {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header-link-number {
  display: flex;
  flex-direction: row;
}

.header-link-number h2 {
  padding-left: 1rem;
  color: #737373;
}
</style>
