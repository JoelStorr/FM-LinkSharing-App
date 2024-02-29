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

<style scoped>
.link {
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 1rem;
  text-decoration: none;
}

.link:hover {
  cursor: pointer;
}

p {
  margin: 1rem 1rem;
  flex: 1;
}

.dark-text {
  color: #333333;
}

.light-text {
  color: white;
}

.icon {
  filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(44%)
    hue-rotate(56deg) brightness(114%) contrast(100%);
  scale: 1.2;
}

.arrow-dark {
  filter: brightness(0) saturate(100%) invert(48%) sepia(18%) saturate(0%)
    hue-rotate(293deg) brightness(90%) contrast(90%);
}

.github {
  background-color: #1a1a1a;
}
.forntendmentor {
  background-color: #fff;
  border: 1px solid #737373;
}
.twitter {
  background-color: #43b7e9;
}

.linkedin {
  background-color: #2e67fd;
}

.youtube {
  background-color: #ee393a;
}

.facebook {
  background-color: #2342ac;
}

.twitch {
  background-color: #ee42c8;
}

.devto {
  background-color: #333333;
}

.codewars {
  background-color: #8a1b50;
}

.codepen {
  background-color: #5f6061;
}

.freecodecamp {
  background-color: #302267;
}

.gitlab {
  background-color: #eb4925;
}

.hashnode {
  background-color: #0435d1;
}

.stackoverflow {
  background-color: #ec7100;
}
</style>
