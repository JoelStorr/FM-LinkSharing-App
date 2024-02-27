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
      shareLink: null
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
        edit: null
      });
    },

    add(link) {
      const index = this.links.map((e) => e.id).indexOf(link.id);
      this.links[index].name = link.name;
      this.links[index].icon = link.icon;
      this.links[index].link = link.link;
      this.links[index].placeholder = link.placeholder;
      this.links[index].edit = this.links[index].edit == null ? null : true
    },

    remove(id) {
      const index = this.links.map((e) => e.id).indexOf(id);

      this.removedLinks.push(id);
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

    addShareLink(link) {
      this.profile.shareLink = link;
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

    setToken(token){
      this.token = token
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


    // NOTE: Links

    //Get Links from Server
    async getLinks(){
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/links',
        headers: { 
          'Accept': 'application/json', 
          'Authorization': `Bearer ${this.token}`
        },
      };

      console.log(this.token)

      await axios.request(config)
      .then((response) => {
        console.log(response.data);


        response.data.sort((a,b)=> a.position - b.position)

        // Add To Store
        for (let link of response.data){
          console.log(link.id)
          this.links.push({
            id: link.id,
            position: link.position,
            name: link.name,
            icon: link.icon,
            link: link.link,
            placeholder: link.placeholder,
            edit: false
          });
        }

        return JSON.stringify(response.data)
      })
      .catch((error) => {
        
        if (error.response.status == 401){
          console.log(error.response.status);
          throw new Error('401')
        }

      });
    },

    //Save Links to server
    async saveData(){

        // Handle Order of links
        for(let i = 0; i < this.links.length; i++ ){
          if(this.links[i].position != i){
            this.links[i].position = i;
            this.links[i].edit = this.links[i].edit == null ? null : true
          }
        }




      for(let link of this.links){
        console.log(link['id'])
        //check if link is new 
        if (link['edit'] == null){
          //add new link
          let data = JSON.stringify({
            position: link['position'],
            name: link['name'],
            icon: link['icon'],
            link: link['link'],
            placeholder: link['placeholder'],
          });

          let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://127.0.0.1:8000/links",
            headers: {
              Accept: "application/json",
              Authorization:`Bearer ${this.token}`,
              "Content-Type": "application/json",
            },
            data: data,
          };

          // TODO: Handle Errors
          axios
            .request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });

        }else if(link['edit'] == true){

          // update existing link
          
          let data = JSON.stringify({
            id: link['id'],
            position: link['position'],
            name: link['name'],
            icon: link['icon'],
            link: link['link'],
            placeholder:link['placeholder'],
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
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });

        }


        // Handle Profile Informations

      }


      if (this.removedLinks.length > 0){
        for(let id of this.removedLinks){
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
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
  
        }
      }


    },
    // NOTE: Profile

    // get profile informations
    async getUserProfile(){

      let data = "";

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://127.0.0.1:8000/profile",
        headers: {
          Accept: "application/json",
          Authorization:
            `Bearer ${this.token}`,
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          
          this.addFristName(response.data['first_name'])
          this.addLastName(response.data['last_name'])
          this.addEmail(response.data['public_email'])
          this.addShareLink(response.data['share_link'])

          console.log(this.profile)

        })
        .catch((error) => {
          console.log(error);
        });


    },



    // NOTE: Share Profile
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
