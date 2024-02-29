import { defineStore } from "pinia";

import axios from "axios";

const URL = "http://127.0.0.1:8000";

export const useMainStore = defineStore("main", {
  state: () => ({
    token: null,
    links: [],
    removedLinks: [],
    profile: {
      firstName: null,
      lastName: null,
      email: null,
      image: null,
      shareLink: null,
    },
    linkSave: false,
    profileSave: false
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
        edit: null,
      });
    },

    add(link) {
      const index = this.links.map((e) => e.id).indexOf(link.id);
      this.links[index].name = link.name;
      this.links[index].icon = link.icon;
      this.links[index].link = link.link;
      this.links[index].placeholder = link.placeholder;
      this.links[index].edit = this.links[index].edit == null ? null : true;


      this.checkLinkSave()
    },

    remove(id) {
      const index = this.links.map((e) => e.id).indexOf(id);

      this.removedLinks.push(id);
      this.links.splice(index, 1);

      this.checkLinkSave()
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
      this.checkProfileSave()
    },
    addLastName(lastName) {
      this.profile.lastName = lastName;
      this.checkProfileSave();
    },
    addEmail(email) {
      this.profile.email = email;
    },

    addImage(image) {
      this.profile.image = image;
      this.checkProfileSave();
    },

    addShareLink(link) {
      this.profile.shareLink = link;
    },

    checkLinkSave(){

      if(this.links.length > 0){
        this.linkSave = true;
        return
      } 
      this.linkSave = false;
    },
    checkProfileSave(){

      if(this.profile.firstName != null && this.profile.lastName != null && this.profile.image != null ){
        this.profileSave = true
        return
      } 

      this.profileSave = false
      return
    },



    // NOTE: API Handling

    // NOTE: Login / Registration
    async loginUser(email, password) {
      const formdata = new FormData();
      formdata.append("username", email);
      formdata.append("password", password);

      let { data } = await axios.post(
        "http://127.0.0.1:8000/auth/token",
        formdata
      );

      this.token = data["access_token"];
      return data["access_token"];
    },

    setToken(token) {
      this.token = token;
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
          return response;
        })
        .catch((error) => {});
    },

    // NOTE: Links

    //Get Links from Server
    async getLinks() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/links",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      await axios
        .request(config)
        .then((response) => {
          response.data.sort((a, b) => a.position - b.position);
          this.links = [];
          // Add To Store
          for (let link of response.data) {
            this.links.push({
              id: link.id,
              position: link.position,
              name: link.name,
              icon: link.icon,
              link: link.link,
              placeholder: link.placeholder,
              edit: false,
            });
          }
          this.checkLinkSave()
          return true;
        })
        .catch((error) => {
          if (error.response.status == 401) {
            throw new Error(401);
          }
        });
    },

    // NOTE: Profile
    // get profile informations
    async getUserProfile() {
      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/profile",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          this.addFristName(response.data["first_name"]);
          this.addLastName(response.data["last_name"]);
          this.addEmail(response.data["public_email"]);
          this.addShareLink(response.data["share_link"]);
        })
        .catch((error) => {});

      this.getProfileImage();
    },

    // get profile image
    async getProfileImage() {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/profile/show",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "arraybuffer",
        },
      };

      axios
        .request(config)
        .then(async (response) => {
          let base64String = `data:image/jpeg;base64,${response.data}`;
          this.profile.image = base64String;
          this.checkProfileSave();
        })
        .catch((error) => {});
    },

    //Save Links to server
    async saveData() {


      if(this.linkSave){
        // Handle Order of links
        for (let i = 0; i < this.links.length; i++) {
          if (this.links[i].position != i) {
            this.links[i].position = i;
            this.links[i].edit = this.links[i].edit == null ? null : true;
          }
        }
  
        for (let link of this.links) {
          //check if link is new
          if (link["edit"] == null) {
            //add new link
            let data = JSON.stringify({
              position: link["position"],
              name: link["name"],
              icon: link["icon"],
              link: link["link"],
              placeholder: link["placeholder"],
            });
  
            let config = {
              method: "post",
              maxBodyLength: Infinity,
              url: "http://127.0.0.1:8000/links",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
              },
              data: data,
            };
  
            // TODO: Handle Errors
            axios
              .request(config)
              .then((response) => {})
              .catch((error) => {});
          } else if (link["edit"] == true) {
            // update existing link
  
            let data = JSON.stringify({
              id: link["id"],
              position: link["position"],
              name: link["name"],
              icon: link["icon"],
              link: link["link"],
              placeholder: link["placeholder"],
            });
  
            let config = {
              method: "post",
              maxBodyLength: Infinity,
              url: "http://127.0.0.1:8000/links/edit",
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
              },
              data: data,
            };
  
            axios
              .request(config)
              .then((response) => {})
              .catch((error) => {});
          }
  
          // Handle Profile Informations
        }
  
        // Handle removed links
        if (this.removedLinks.length > 0) {
          for (let id of this.removedLinks) {
            let data = "";
  
            let config = {
              method: "get",
              maxBodyLength: Infinity,
              url: `http://127.0.0.1:8000/links/${id}`,
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${this.token}`,
              },
              data: data,
            };
  
            axios
              .request(config)
              .then((response) => {})
              .catch((error) => {});
          }
        }

      }

      console.log(this.profileSave)

      if(this.profileSave){

        // Handle profile informations
        let data = JSON.stringify({
          email_public: this.profile.email,
          first_name: this.profile.firstName,
          last_name: this.profile.lastName,
        });
  
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://127.0.0.1:8000/profile",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
          data: data,
        };
  
        axios
          .request(config)
          .then((response) => {})
          .catch((error) => {});
  
        // Handle profile image upload
        // File Upload source https://dev.to/spaceofmiah/api-file-upload-done-right-fastapi-1kd1
        if (this.profile.image) {
          let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://127.0.0.1:8000/profile/upload",
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${this.token}`,
              "Content-Type": "application/json",
            },
            data: { file: this.profile.image },
          };
  
          axios
            .request(config)
            .then((response) => {})
            .catch((error) => {});
        }
      }

    },

    // NOTE: Share Profile
    async getShareProfile(user) {
      

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `http://127.0.0.1:8000/share/${user}`,
        headers: {
          Accept: "application/json",
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          let resUnpack = response.data

          console.log(resUnpack.profile)

          this.addFristName(resUnpack.profile['first_name']);
          this.addLastName(resUnpack.profile['last_name']);
          this.addEmail(resUnpack.profile['public_email'])

          this.links = [];
          // Add To Store
          for (let link of resUnpack.links) {
            this.links.push({
              id: link.id,
              position: link.position,
              name: link.name,
              icon: link.icon,
              link: link.link,
              placeholder: link.placeholder,
              edit: false,
            });
          }

           let config = {
             method: "get",
             maxBodyLength: Infinity,
             url: `http://127.0.0.1:8000/share/show/${resUnpack.profile['profile_image']}`,
             headers: {
               Accept: "application/json",
               "Content-Type": "arraybuffer",
             },
           };

           axios
             .request(config)
             .then(async (response) => {
               let base64String = `data:image/jpeg;base64,${response.data}`;
               this.profile.image = base64String;
               this.checkProfileSave();
             })
             .catch((error) => {});



          console.log(this.profile.firstName)

        })
        .catch((error) => {
          console.log(error);
        });


      console.log(data)

      return data;
    },

    // NOTE: Helplers
    accessToken(token) {
      this.token = token;
    },
  },
});
