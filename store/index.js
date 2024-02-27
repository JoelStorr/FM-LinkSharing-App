import { defineStore } from "pinia";
import axios from "axios";

const URL = "http://127.0.0.1:8000";

export const useMainStore = defineStore("main", {
  state: () => ({
    token: null,
    links: [],
    profile: {
      firstName: null,
      lastName: null,
      email: null,
      image: null,
    },
  }),

  actions: {
    // NOTE:Links
    addEmpty() {
      this.links.push({
        id: Math.random() * 10000,
        name: null,
        icon: null,
        link: null,
        placeholder: null,
      });
    },

    add(link) {
      const index = this.links.map((e) => e.id).indexOf(link.id);
      this.links[index].name = link.name;
      this.links[index].icon = link.icon;
      this.links[index].link = link.link;
      this.links[index].placeholder = link.placeholder;
    },

    remove(id) {
      const index = this.links.map((e) => e.id).indexOf(id);
      this.links.splice(index, 1);
    },

    reoderLinks(reorder) {
      this.links = reorder;
    },

    getIndex(id) {
      return this.links.map((e) => e.id).indexOf(id);
    },

    // NOTE: Profile
    addFristName(firstName) {
      this.profile.firstName = firstName;
    },
    addLastName(lastName) {
      this.profile.lastName = lastName;
    },
    addEmail(email) {
      this.profile.email = email;
    },

    addImage(image) {
      this.profile.image = image;
    },

    // NOTE: API Handling
    async loginUser(email, password) {
      const formdata = new FormData();
      formdata.append("username", email);
      formdata.append("password", password);

      let { data } = await axios.post(
        "http://127.0.0.1:8000/auth/token",
        formdata
      );

      return data["access_token"];
    },

    async registerUser(email, password) {
      
      let data = JSON.stringify({
        email: email,
        password: password,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/auth/register",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          return response
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getShareProfile() {
      let { data } = await axios.get(`${URL}/share/${"Joel-Storr-1"}`);
      console.log(data);
      return data;
    },


    // NOTE: Helplers
     accessToken(token){
      this.token = token;
     }
  },
});
