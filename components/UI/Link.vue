<template>
  <NuxtLink
    class="link"
    :class="bgColor"
    :to="externalLink"
    :target="props.link ? '_blank' : ''"
  >
    <img :src="props.iconSrc" :class="iconDark" alt="icon"/>
    <p :class="darkText">{{ props.name }}</p>
    <img src="/images/icon-arrow-right.svg" :class="darkArrow" alt="icon"/>
  </NuxtLink>
</template>

<script setup>
import './link.css';

const props = defineProps({
  iconSrc: String,
  name: String,
  link: String,
});

const externalLink = computed(() => {
  if (props.link == null) {
    return "";
  }
  const linkpartialhttp = props.link.slice(0, 4);
  const linkpartialhttps = props.link.slice(0, 5);

  if (linkpartialhttp != "http" || linkpartialhttps != "https") {
    return "https://" + props.link;
  } else {
    return props.link;
  }
});

let bgColor = computed(() => {
  switch (props.name) {
    case "GitHub":
      return "github";
    case "Frontend Mentor":
      return "forntendmentor";
    case "Twitter":
      return "twitter";
    case "LinkedIn":
      return "linkedin";
    case "YouTube":
      return "youtube";
    case "Facebook":
      return "facebook";
    case "Twitch":
      return "twitch";
    case "Dev.to":
      return "devto";
    case "Codewars":
      return "codewars";
    case "Codepen":
      return "codepen";
    case "freeCodeCamp":
      return "freecodecamp";
    case "GitLab":
      return "gitlab";
    case "Hashnode":
      return "hashnode";
    case "Stack Overflow":
      return "stackoverflow";
  }
});

let darkArrow = computed(() => {
  return props.name == "Frontend Mentor" ? "arrow-dark" : "";
});

let darkText = computed(() => {
  return props.name == "Frontend Mentor" ? "dark-text" : "light-text";
});

let iconDark = computed(() => {
  if (props.name == "Frontend Mentor" || props.name == "Dev.to") {
    return "";
  } else {
    return "icon";
  }
});
</script>


