export class LinkObject {
  name;
  iconSrc;
  link;

  constructor(name, iconSrc, link) {
    this.name = name;
    this.iconSrc = iconSrc;
    this.link = link;
  }
}

export const LinkOptions = {
  GitHub: "/images/icon-github.svg",
  YouTube: "/images/icon-youtube.svg",
  LinkedIn: "/images/icon-linkedin.svg",
};

export const DropdownOptions = [
  {
    name: "GitHub",
    icon: "/images/icon-github.svg",
    link: "https://github.com/",
  },
  {
    name: "Forntend Mentor",
    icon: "/images/icon-frontend-mentor.svg",
    link: "https://www.frontendmentor.io/profile/",
  },
  {
    name: "Twitter",
    icon: "/images/icon-twitter.svg",
    link: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    icon: "/images/icon-linkedin.svg",
    link: "https://linkedin.com/in/",
  },
  {
    name: "YouTube",
    icon: "/images/icon-youtube.svg",
    link: "https://www.youtube.com/channel/",
  },
  {
    name: "Facebook",
    icon: "/images/icon-facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    name: "Twitch",
    icon: "/images/icon-twitch.svg",
    link: "https://www.twitch.tv/",
  },
  {
    name: "Dev.to",
    icon: "/images/icon-devto.svg",
    link: "https://dev.to/",
  },
  {
    name: "Codewars",
    icon: "/images/icon-codewars.svg",
    link: "https://www.codewars.com/users/",
  },
  {
    name: "Codepen",
    icon: "/images/icon-codepen.svg",
    link: "https://codepen.io/",
  },
  {
    name: "freeCodeCamp",
    icon: "/images/icon-freecodecamp.svg",
    link: "https://www.freecodecamp.org/",
  },
  {
    name: "GitLab",
    icon: "/images/icon-gitlab.svg",
    link: "https://gitlab.com/",
  },
  {
    name: "Hashnode",
    icon: "/images/icon-hashnode.svg",
    link: "https://hashnode.com/",
  },
  {
    name: "Stack Overflow",
    icon: "/images/icon-stack-overflow.svg",
    link: "https://stackoverflow.com/users/",
  },
];


export const emailRegEx = new RegExp(
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  "i"
);