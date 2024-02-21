

export class LinkObject {


    name;
    iconSrc;
    link;

    constructor(name, iconSrc, link  ){
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
    id: "GitHub",
    name: "GitHub",
    icon: "/images/icon-github.svg",
    link: "https://github.com/",
  },
  {
    id: "FrontendMenter",
    name: "Forntend Mentor",
    icon: "/images/icon-frontend-mentor.svg",
    link: "https://www.frontendmentor.io/profile/",
  },
  {
    id: "Twitter",
    name: "Twitter",
    icon: "/images/icon-twitter.svg",
    link: "https://twitter.com/",
  },
  {
    id: "LinkedIn",
    name: "LinkedIn",
    icon: "/images/icon-linkedin.svg",
    link: "https://linkedin.com/in/",
  },
  {
    id: "YouTube",
    name: "YouTube",
    icon: "/images/icon-youtube.svg",
    link: "https://www.youtube.com/channel/",
  },
  {
    id: "Facebook",
    name: "Facebook",
    icon: "/images/icon-facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    id: "Twitch",
    name: "Twitch",
    icon: "/images/icon-twitch.svg",
    link: "https://www.twitch.tv/",
  },
  {
    id: "Devto",
    name: "Dev.to",
    icon: "/images/icon-devto.svg",
    link: "https://dev.to/",
  },
  {
    id: "Codewars",
    name: "Codewars",
    icon: "/images/icon-codewars.svg",
    link: "https://www.codewars.com/users/",
  },
  {
    id: "Codepen",
    name: "Codepen",
    icon: "/images/icon-codepen.svg",
    link: "https://codepen.io/",
  },
  {
    id: "freeCodeCamp",
    name: "freeCodeCamp",
    icon: "/images/icon-freecodecamp.svg",
    link: "https://www.freecodecamp.org/",
  },
  {
    id: "GitLab",
    name: "GitLab",
    icon: "/images/icon-gitlab.svg",
    link: "https://gitlab.com/",
  },
  {
    id: "Hashnode",
    name: "Hashnode",
    icon: "/images/icon-hashnode.svg",
    link: "https://hashnode.com/",
  },
  {
    id: "StackOverflow",
    name: "Stack Overflow",
    icon: "/images/icon-stack-overflow.svg",
    link: "https://stackoverflow.com/users/",
  },
];