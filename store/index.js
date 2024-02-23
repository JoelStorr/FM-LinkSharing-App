import { defineStore } from 'pinia';



export const useMainStore = defineStore('main', {
    state: ()=>({
        links: [],
        profile: {
            firstName: null,
            lastName: null,
            email: null,
            image: null,
        }
    }),

    actions: {

        addEmpty(){
            this.links.push({
                id: Math.random() * 10000,
                name: null,
                icon: null,
                link: null, 
            })
        },

        add(link) {
            const index = this.links.map((e) => e.id).indexOf(link.id);
            this.links[index].name = link.name
            this.links[index].icon = link.icon
            this.links[index].link = link.link

        },
        remove( id ) {
            const index = this.links.map((e) => e.id).indexOf(id);
            this.links.splice(index, 1);
        },

        addFristName(firstName){
            this.profile.firstName = firstName;
        },
        addLastName(lastName){
            this.profile.lastName = lastName;
        },
        addEmail(email){
            this.profile.email = email
        },

        addImage(image){
            this.profile.image = image
        }
    }
})


