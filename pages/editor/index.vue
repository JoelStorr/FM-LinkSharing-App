<template>
  <div id="editor-view">
    <NavBar
      isLinkEditor="isLinkEditor.value"
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
          <idv class="profile-image-holder">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="profile-image"
            />
          </idv>
          <h2 class="name-prev">Max Mustermann</h2>
          <p class="link-prev">max@example.com</p>
          <UILink
            v-if="link1 != null"
            id="link1"
            :iconSrc="link1.iconSrc"
            :name="link1.name"
          />
          <UILink
            v-if="link1 != null"
            id="link2"
            iconSrc="/images/icon-github.svg"
            name="YouTube"
          />
          <UILink
            v-if="link1 != null"
            id="link3"
            iconSrc="/images/icon-github.svg"
            name="GitHub"
          />
          <UILink
            v-if="link1 != null"
            id="link4"
            iconSrc="/images/icon-github.svg"
            name="YouTube"
          />
          <UILink
            v-if="link1 != null"
            id="link5"
            iconSrc="/images/icon-github.svg"
            name="LinkedIn"
          />
        </div>
      </div>
      <div class="editor">
        <LinkEditor v-if="isLinkEditor" />
        <ProfileEditor v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLinkEditor = ref(true);

const link1 = ref({ iconSrc: "/images/icon-github.svg", name: "GitHub" });
const link2 = ref(null);
const link3 = ref(null);
const link4 = ref(null);
const link5 = ref(null);

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
</script>

<style scoped>
#editor-view {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
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
}

.editor {
  width: 58%;
  height: 100%;
  background-color: white;
  border-radius: 2.5rem;
  display: flex;
}
</style>
