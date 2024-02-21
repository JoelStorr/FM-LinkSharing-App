<template>
    <idv id="link-edit">
        <div class="header">
                <div class="header-link-number">
                    <img src="/images/icon-drag-and-drop.svg" />
                    <h2>Link # {{ props.linkNumber }}</h2>
                </div>
            
            <button>Remove</button>
        </div>
        <p>Platform</p>
        <UIDropdown :options="DropdownOptions" @set-active-element="onActiveElement" />

        <p>Link</p>
        <UITextField type="string"  :placeholder-text="activeLinkElement.link" @on-value-change="linkValidation" :error="hasError">
            <img :src="activeLinkElement.icon"/>
            <template v-slot:error >
                {{ errorMessage }}
            </template>
        </UITextField>

    </idv>


</template>


<script setup>

    import { DropdownOptions } from '../Helper';

    const props = defineProps({
        linkNumber: Number,
        link: Object
    });

   
    
    const activeLinkElement = ref({id: null, name: null, icon: "/images/icon-links-header.svg", link: null})

    const hasError = ref(false)
    const errorMessage = ref("")

    function onActiveElement(value){
        console.log(value)
        activeLinkElement.value = value;
    }

   function isValidUrl(string) {
    const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );
    return pattern.test(string);
    }


    let time = null;

    function linkValidation(value){

        if(time != null) {
            clearTimeout(time);
        }

         time = setTimeout(()=>{

            if(value.length < 1){
                errorMessage.value = "Can't be empty"
                hasError.value = true
            }


            console.log(value)
            if(isValidUrl(value)){
                console.log('URL was true')
                errorMessage.value = ""
                hasError.value = false
            }else{
                errorMessage.value = "Please check the URL"
                hasError.value = true;
                console.log('invalid url')
            }

        }, 1000)

        
    }

</script>


<style scoped>

    #link-edit{
        min-width: 100%;
        padding: 0;
        background-color: #FAFAFA;
        border-radius: 2.5rem;
        padding: 2rem;
    }


    #link-edit button{
        background-color: rgba(0,0,0,0);
        border: none;
        color: #737373;

    }

    #link-edit p{
        margin: 0;
        padding: 1rem 0 .2rem 0;
        font-size: 1rem;
    }

    .header{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .header-link-number{
        display: flex;
        flex-direction: row;
    }

    .header-link-number h2{
        padding-left: 1rem;
        color: #737373;
    }
</style>