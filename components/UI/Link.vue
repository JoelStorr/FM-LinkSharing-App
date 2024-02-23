<template>
  <div class="link" :class="bgColor">
    <img :src="props.iconSrc" class="icon" />
    <p>{{ props.name }}</p>
    <img src="/images/icon-arrow-right.svg" />
  </div>
</template>

<script setup>
const props = defineProps({
  iconSrc: String,
  name: String,
});

const bgColor = computed(() => {
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
      return "stackoverflow"
    
    case
  }
});
</script>

<style scoped>
.link {
  background-color: black;
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0 1rem;
}

.link:hover {
  cursor: pointer;
}

p {
  margin: 1rem 1rem;
  flex: 1;
  color: white;
}

.icon {
  filter: brightness(0) saturate(100%) invert(100%) sepia(1%) saturate(44%)
    hue-rotate(56deg) brightness(114%) contrast(100%);
  scale: 1.2;
}

.black {
  background-color: #1a1a1a;
}
.red {
  background-color: #ee3939;
}
.blue {
  background-color: #2d68ff;
}
</style>
