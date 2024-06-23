<template>
  <div id="preview">
    <div class="bg-color-element"></div>
    <div class="nav">
      
      <img src="/images/logo-devlinks-large.svg"/>
      <UIButtonSecondary @on-click="navigateTo('/login')" :icon-only="true">
      <template v-slot:text> Login / Register </template>

      <template v-slot:icon>
        <img src="/images/icon-profile-details-header.svg" alt="icon" />
      </template>
    </UIButtonSecondary>

    </div>
    <div class="contact-card-holder">
      <div class="contact-card">
        <div class="imageOutline">
          <img :src="store.profile.image" class="profileImage" alt="profile image"/>
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

import { useRoute } from "vue-router";
import { useMainStore } from "~/store/index";
import './user.css';

definePageMeta({
  middleware: [
    async function (to, from) {
      let token = useCookie("access_token");
      let store = useMainStore();
      let route = useRoute();


      let navigator = await store
        .getShareProfile(route.params['user'])
        .then((val) => {
          
          return null
        })
        .catch((error) => {
          console.log(error)
          if (error == "Error: 401") {
            console.log('in if')
             return navigateTo("/login");
          }
        });

      
        return navigator




    },
  ],
});



const route = useRoute()

console.log(route.params)

const store = useMainStore();

function goBack() {
  navigateTo("/editor");
}


function shareLink(){
  console.log(store.profile.shareLink)
  navigator.clipboard.writeText( `www.localhost:3000/share/${store.profile.shareLink}`);
  
}


</script>

