import { defineStore } from 'pinia';



export const useMainStore = defineStore('main', {
    state: ()=>({
        links: [],
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
            const index = this.links.map((e) => e.id).indexOf(id);
            this.links[index].name = link.name
            this.links[index].icon = link.icon
            this.links[index].link = link.link

        },
        remove(state, { id }) {

            const index = this.links.map((e) => e.id).indexOf(id);

            this.links.splice(index, 1);
        },
    }
})


