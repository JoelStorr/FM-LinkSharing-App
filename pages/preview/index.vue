<template>
  <div id="preview">
    <div class="bg-color-element"></div>
    <div class="nav">
      <UIButtonSecondary @on-click="goBack">
        <template v-slot:text> Back to Editor </template>
      </UIButtonSecondary>
      <!-- TODO: Copy URL -->
      <UIButtonPrimary @on-click="shareLink"> Share Link </UIButtonPrimary>
    </div>
    <div class="contact-card-holder">
      <div class="contact-card">
        <div class="imageOutline">
          <img :src="store.profile.image" class="profileImage" alt="profile image" />
        </div>
        <h1>{{ store.profile.firstName }} {{ store.profile.lastName }}</h1>
        <p>{{ store.profile.email }}</p>

        <div class="link-holder">
          <UILink
            class="link-element"
            v-for="link in store.links"
            :id="link.id"
            :iconSrc="link.icon"
            :name="link.name"
            :link="link.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "~/store/index";
import './preview.css';

const store = useMainStore();

function goBack() {
  navigateTo("/editor");
}


function shareLink(){
  console.log(store.profile.shareLink)
  navigator.clipboard.writeText( `www.localhost:3000/share/${store.profile.shareLink}`);
  
}


</script>
