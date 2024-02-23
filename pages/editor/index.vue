<template>
  <div id="editor-view">
    <NavBar
      :isLinkEditor="isLinkEditor"
      @setLinkEditor="setLinkEditor"
      @setProfileEditor="setProfileEditor"
    />

    <div class="mainView">
      <div class="phonePreview">
        <div class="image-holder">
          <img
            src="/images/illustration-phone-mockup.svg"
            class="phone-image"
          />
          <div class="profile-image-holder">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="profile-image"
            />
          </div>
          <h2 class="name-prev">
            {{ profile.firstName }} {{ profile.lastName }}
          </h2>
          <p class="link-prev">{{ profile.email }}</p>
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
    </div>
  </div>
</template>

<script setup>
import { LinkObject, LinkOptions } from "~/components/Helper";
import { useMainStore } from "~/store/index";

const store = useMainStore();
const { add, remove } = store;

console.log(store.links);

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
  console.log("set Profile editor");
  isLinkEditor.value = false;
}

function btnClick() {
  console.log("Button Clicked");
}

function submitLink() {
  link1.value = null;
  link2.value = null;
  link3.value = null;
  link4.value = null;
  link5.value = null;

  console.log(links.value);

  for (let link of links.value) {
    console.log("Link value", link);

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

  console.log("Logged Link One", link1);
}
</script>

<style scoped>
#editor-view {
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fafafa;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.phonePreview {
  width: 40%;
  flex-flow: column;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.5rem;
  position: relative;
}

.image-holder {
  position: relative;
  width: min-content;
}

.phone-image {
  position: relative;
}

.profile-image-holder {
  position: absolute;
  top: 17.5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 98px;
  height: 98px;
  overflow: hidden;
  border-radius: 100px;
  opacity: 1;
  border: 4px solid #623cff;
}
.profile-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.link-prev {
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
}

.name-prev {
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 70%;
  text-align: center;
}

#link1 {
  position: absolute;
  top: 44%;
  left: 11%;
  width: 78%;
}

#link2 {
  position: absolute;
  top: 54%;
  left: 11%;
  width: 78%;
  opacity: 1;
}
#link3 {
  position: absolute;
  top: 64%;
  left: 11%;
  width: 78%;
  opacity: 1;
}
#link4 {
  position: absolute;
  top: 74%;
  left: 11%;
  width: 78%;
  opacity: 1;
}
#link5 {
  position: absolute;
  top: 84%;
  left: 11%;
  width: 78%;
  opacity: 1;
}

.mainView {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 3rem;
  flex: 1;
  height: 90%;
  overflow: hidden;
}

.editor {
  position: relative;
  width: 58%;
  height: 100%;
  background-color: white;
  border-radius: 2.5rem;
  display: flex;
}
</style>
