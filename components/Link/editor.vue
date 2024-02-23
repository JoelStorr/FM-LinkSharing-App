<template>
  <div id="linkEditor">
    <h1>Customize your links</h1>
    <p>
      Add/edit/remove links below and then share all your profiles with the
      world
    </p>

    <UIButtonSecondary @click="addLink">+ Add new Link</UIButtonSecondary>

    <div class="emptyHolder" v-if="links.length == 0">
      <img src="/images/illustration-empty.svg" />
      <h2>Let's get you started</h2>
      <p>
        Use the "Add new link" button to get started Once you have more then one
        link, you can reorder and edit them. We're here to help you share your
        profiles with everyone
      </p>
    </div>

    <div v-else class="link-edit-items">
      <draggable
        v-model="links"
        :disabled="false"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        :move="checkMove"
        @start="dragging = true"
        @end="dragging = false"
        handle=".handle"
      >
        <template #item="{ element: link }">
          <UILinkEditComponent
            :key="link.id"
            :link="link"
            @linkadded="eventPass"
          ></UILinkEditComponent>
        </template>
      </draggable>
    </div>

    <hr />

    <div class="btn-holder">
      <div class="btn-spacer"></div>
      <UIButtonPrimary :disabled="false" @on-click="save">Save</UIButtonPrimary>
    </div>
  </div>
</template>

<script setup>
import TextField from "~/components/UI/TextField.vue";
import Dropdown from "../UI/Dropdown.vue";
import ImageUploadVue from "../UI/ImageUpload.vue";
import { useMainStore } from "~/store/index";

const emits = defineEmits(["save", "linkadded"]);

const props = defineProps({});

const store = useMainStore();
const { addEmpty, add, reoderLinks } = store;

const links = computed({
  get() {
    return store.links;
  },
  set(value) {
    reoderLinks(value);
    emits("linkadded");
  },
});

const dragging = useState("dragging", () => {
  return false;
});

function eventPass() {
  emits("linkadded");
}

function save() {}

function addLink() {
  addEmpty();
}

function checkMove(e) {
  window.console.log("Future index: " + e.draggedContext.futureIndex);
}
</script>

<style scoped>
#linkEditor {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2.5rem;
  overflow: hidden;
}

.emptyHolder {
  max-width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  padding: 5rem 20rem;
}

.link-edit-items {
  max-width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: scroll;
}

h1 {
  padding: 0;
  margin: 0;
}

hr {
  min-width: 100%;
  border: none;
  border-top: 1px solid #d9d9d9;
  height: 0;
}

.btn-holder {
  display: flex;
}

.btn-spacer {
  flex: 1;
}

.list-group {
  width: 100%;
}
.not-draggable {
  cursor: no-drop;
}
</style>
