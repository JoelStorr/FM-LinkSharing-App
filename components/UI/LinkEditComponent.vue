<template>
  <div id="link-edit">
    <div class="header">
      <div class="header-link-number">
        <img src="/images/icon-drag-and-drop.svg" />
        <h2>Link # {{ props.linkNumber }}</h2>
      </div>

      <button>Remove</button>
    </div>
    <p>Platform</p>
    <UIDropdown
      :options="DropdownOptions"
      @set-active-element="onActiveElement"
    />

    <p>Link</p>
    <UITextField
      type="string"
      :placeholder-text="activeLinkElement.link"
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
  linkNumber: Number,
  link: Object,
});

const store = useMainStore();
const { add, remove } = store;

const emits = defineEmits(["linkadded", "remove"]);

const activeLinkElement = ref({
  id: props.link.id ? props.link.id : null,
  name: null,
  icon: "/images/icon-links-header.svg",
  link: null,
});

const hasError = ref(false);
const errorMessage = ref("");
const id = props.link.id;
const linkValidated = ref(false);

function onActiveElement(value) {
  activeLinkElement.value = {
    ...activeLinkElement.value,
    name: value.name,
    icon: value.icon,
  };

  if (linkValidated.value && activeLinkElement.value.id != null) {
    console.log("new link value", activeLinkElement.value);

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
    }

    console.log(value);
    if (isValidUrl(value)) {
      console.log("URL was true");
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
      console.log("invalid url");
    }
  }, 1000);
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
