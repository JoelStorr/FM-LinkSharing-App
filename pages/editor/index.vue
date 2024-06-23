<template>
  <div id="editor-view">
    <NavBar
      :isLinkEditor="isLinkEditor"
      @setLinkEditor="setLinkEditor"
      @setProfileEditor="setProfileEditor"
    />

    <main class="mainView">
      <div class="phonePreview">
        <div class="image-holder">
          <img
            src="/images/illustration-phone-mockup.svg"
            class="phone-image"
            alt="phone mockup"
          />
          <div class="profile-image-holder" v-if="profile.image">
            <img :src="profile.image" class="profile-image" alt="profiel image"/>
          </div>
          <h2 class="name-prev"  v-if="profile.firstName !== null && profile.lastName !== null">
            {{ profile.firstName }} {{ profile.lastName }}
          </h2>
          <p class="link-prev" v-if="profile.email !== null">{{ profile.email }}</p>
          <UILink
            v-if="link1 !== null"
            id="link1"
            :iconSrc="link1.icon"
            :name="link1.name"
          />
          <div v-else></div>
          <UILink
            v-if="link2 != null"
            id="link2"
            :iconSrc="link2.icon"
            :name="link2.name"
          />
          <UILink
            v-if="link3 != null"
            id="link3"
            :iconSrc="link3.icon"
            :name="link3.name"
          />
          <UILink
            v-if="link4 != null"
            id="link4"
            :iconSrc="link4.icon"
            :name="link4.name"
          />
          <UILink
            v-if="link5 != null"
            id="link5"
            :iconSrc="link5.icon"
            :name="link5.name"
          />
        </div>
      </div>
      <div class="editor">
        <LinkEditor
          v-if="isLinkEditor"
          @save="submitLink"
          @linkadded="submitLink"
        />
        <ProfileEditor v-else />
      </div>
    </main>
  </div>
</template>

<script setup>
import { LinkObject, LinkOptions } from "~/components/Helper";
import { useMainStore } from "~/store/index";
import './index.css';

const store = useMainStore();
const { add, remove, getLinks, setup } = store;

let token = useCookie("access_token");

definePageMeta({
  middleware: [
    async function (to, from) {
      let token = useCookie("access_token");
      let store = useMainStore();

      if (!token.value) {
        return navigateTo("/login");
      }

      if (store.token == null) {
        store.setToken(token.value);
      }

      let navigator = await store
        .getLinks()
        .then((val) => {
          if (val) {
            submitLink();
          }
          return null
        })
        .catch((error) => {
          console.log(error)
          if (error == "Error: 401") {
            console.log('in if')
             return navigateTo("/login");
          }
        });

      store
        .getUserProfile()
        .then((val) => {})
        .catch((error) => {
          if (error == "Error: 401") {
            return navigateTo("/login");
          }
        });

        return navigator




    },
  ],
});

const isLinkEditor = ref(true);

const link1 = useState("link1", () => {
  return null;
});
const link2 = useState("link2", () => {
  return null;
});
const link3 = useState("link3", () => {
  return null;
});
const link4 = useState("link4", () => {
  return null;
});
const link5 = useState("link5", () => {
  return null;
});

const links = computed(() => {
  return store.links;
});

const profile = computed(() => {
  return store.profile;
});

function setLinkEditor() {
  isLinkEditor.value = true;
}

function setProfileEditor() {
  isLinkEditor.value = false;
}

function btnClick() {}

function submitLink() {
  link1.value = null;
  link2.value = null;
  link3.value = null;
  link4.value = null;
  link5.value = null;

  for (let link of links.value) {
    if (link.name == null) {
      continue;
    }

    if (link1.value == null) {
      link1.value = link;
      continue;
    }

    if (link2.value == null) {
      link2.value = link;
      continue;
    }
    if (link3.value == null) {
      link3.value = link;
      continue;
    }
    if (link4.value == null) {
      link4.value = link;
      continue;
    }
    if (link5.value == null) {
      link5.value = link;
      continue;
    }
  }
}

submitLink();
</script>

