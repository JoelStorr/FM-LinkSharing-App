<template>
  <div id="linkEditor">
    <h1>Customize your links</h1>
    <p>
      Add/edit/remove links below and then share all your profiles with the
      world
    </p>

    <UIButtonSecondary @click="addLink">
      <template v-slot:text> + Add new Link </template>
    </UIButtonSecondary>

    <div class="emptyHolder" v-if="links.length == 0">
      <img src="/images/illustration-empty.svg" alt="icon"/>
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
      <UIButtonPrimary class="save-btn" :disabled="activeSave" @on-click="save"
        >Save</UIButtonPrimary
      >
    </div>
  </div>
</template>

<script setup>
import TextField from "~/components/UI/TextField.vue";
import Dropdown from "../UI/Dropdown.vue";
import ImageUploadVue from "../UI/ImageUpload.vue";
import { useMainStore } from "~/store/index";

import './link-editor.css';

const emits = defineEmits(["save", "linkadded"]);

const props = defineProps({});

const store = useMainStore();
const { addEmpty, add, reoderLinks, saveData, checkLinkSave } = store;

const links = computed({
  get() {
    return store.links;
  },
  set(value) {
    reoderLinks(value);
    emits("linkadded");
  },
});


  let activeSave = computed(()=>{
    console.log(store.linkSave)
    return !store.linkSave
  })

const dragging = useState("dragging", () => {
  return false;
});

function eventPass() {
  emits("linkadded");
}

function save() {

  saveData()

}

function addLink() {
  addEmpty();
}

function checkMove(e) {
  //window.console.log("Future index: " + e.draggedContext.futureIndex);
}
</script>


