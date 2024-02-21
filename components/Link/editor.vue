<template>
  <div id="linkEditor">
    <h1>Customize your links</h1>
    <p>
      Add/edit/remove links below and then share all your profiles with the
      world
    </p>

    <UIButtonSecondary>+ Add new Link</UIButtonSecondary>

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
      <UILinkEditComponent />
      
    
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

const emits = defineEmits(['save'])

const props = defineProps({
  links: Array
});


let options = [
  {
    id: "github",
    name: "Github",
    icon: "/images/icon-github.svg",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "/images/icon-youtube.svg",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "/images/icon-linkedin.svg",
  },
];


function save(){
  emits('save', {name: 'GitHub', link: 'https://www.github.com'})
}

function logger(value) {
  console.log(value);
}
</script>

<style scoped>
#linkEditor {
  position: relative;
  width: 100%;
  background-color: white;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2.5rem;
}

.emptyHolder {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  padding: 5rem 20rem;
}


.link-edit-items{
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
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
</style>
