<template>
  <nav id="navbar">
    <div class="logo-holder">
      <img src="/images/logo-devlinks-small.svg" alt="icon"/>
      <h2 class="mobile-name">devlinks</h2>
    </div>

    <div class="tabs-holder">
      <UITab
        img-src="/images/icon-links-header.svg"
        :active="linskActive"
        @clicked="onLinkEditorClick"
        >Links</UITab
      >
      <UITab
        img-src="/images/icon-profile-details-header.svg"
        :active="!linskActive"
        @clicked="onProfileEditorCLick"
        >Profile Details</UITab
      >
    </div>

    <UIButtonSecondary @on-click="navigateToProfiel" :icon-only="true">
      <template v-slot:text> Preview </template>

      <template v-slot:icon>
        <img src="/images/icon-preview-header.svg" alt="icon"/>
      </template>
    </UIButtonSecondary>
  </nav>
</template>

<script setup>
const props = defineProps({
  isLinkEditor: Boolean,
});

const linskActive = ref(true);

const emit = defineEmits(["setLinkEditor", "setProfileEditor"]);

function onLinkEditorClick() {
  emit("setLinkEditor");
  linskActive.value = true;
}

function onProfileEditorCLick() {
  emit("setProfileEditor");
  linskActive.value = false;
}

function navigateToProfiel() {
  navigateTo("/preview");
}
</script>

<style scoped>
#navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 25px;
  padding: 1rem 2rem;
}

h2 {
    font-size: 3.2rem;
    line-height: 150%;
    font-weight: bold;
    margin: 0;
    padding: 0;
}
.logo-holder {
  display: flex;
}

img {
  margin: 0;
  padding: 0;
}

.tabs-holder {
  min-width: 15vw;
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 450px) {
  .mobile-name {
    display: none;
  }
}
</style>
