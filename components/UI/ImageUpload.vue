<template>
  <div
    class="image-uploader"
    @dragover.prevent="onDragover"
    @dragleave.prevent="onDragleave"
    @drop.prevent="onDrop"
  >
    <img :src="imageConvert" v-if="imageConvert" class="user-img" alt="profiel image"/>
    <div :class="profileImage ? 'haseImage' : 'noImage'">
      <img src="/images/icon-upload-image.svg" alt="icon"/>
      <p v-if="profileImage">Change Image</p>
      <p v-else>+ Upload Image</p>
    </div>
    <label>
      <input
        type="file"
        accept="image/jpeg, image/png image/jpg image/PNG"
        @change="imageUploader"
      />
    </label>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
import './imageUpload.css';

const store = useMainStore();
const { addImage } = store;

const profileImage = computed(() => {
  return store.profile.image;
});

const imageConvert = useState("imageConvert", () => store.profile.image);

async function imageUploader(value) {
  const image = value.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = (e) => {
    imageConvert.value = e.target.result;
  };

  setTimeout(() => {
    addImage(imageConvert.value);
  }, 500);
}

function onDragover(e) {
  e.preventDefault();
  //isDragging = true
  e.dataTransfer.dropEffect = "copy";
}

function onDragleave(e) {
  e.preventDefault();
  //isDragging = false
}

function onDrop(e) {
  e.preventDefault();
  //isDragging = false
  const image = e.dataTransfer.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = (e) => {
    imageConvert.value = e.target.result;
  };

  setTimeout(() => {
    addImage(imageConvert.value);
  }, 500);
}
</script>

