<template>

    <div class="image-uploader" @dragover.prevent="onDragover" @dragleave.prevent="onDragleave" @drop.prevent="onDrop" >
        <img :src="imageConvert" v-if="imageConvert" class="user-img" />
       <div :class="profileImage? 'haseImage' : 'noImage'">
           <img src="/images/icon-upload-image.svg" />
           <p v-if="profileImage">Change Image</p>
           <p v-else>+ Upload Image</p>
       </div>
       <label>
           <input type="file" accept="image/jpeg, image/png image/jpg image/PNG" @change="imageUploader"/>
            
       </label>
    </div>

</template>

<script setup>

    import {useMainStore} from '~/store/index'

    const store = useMainStore()
    const {addImage} = store

    const profileImage = computed(()=>{
        console.log(store.profile.image)
        return store.profile.image
    })

    const imageConvert = useState('imageConvert', ()=> null)

   async function imageUploader(value){

        
        const image = value.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
            imageConvert.value = e.target.result;
        };
        
        setTimeout(()=>{
        console.log('Image Convert', imageConvert.value)

        addImage(imageConvert.value)
        console.log('Store:' ,store.profile.image)

        },500)

       
    }

    function onDragover(e){
        e.preventDefault();
        //isDragging = true
        e.dataTransfer.dropEffect = "copy"
    }

    function onDragleave(e){
        e.preventDefault();
        //isDragging = false
    }

    function onDrop(e){
        e.preventDefault();
        //isDragging = false
        const image = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
            imageConvert.value = e.target.result;
        };
        
        setTimeout(()=>{
        console.log('Image Convert', imageConvert.value)

        addImage(imageConvert.value)
        console.log('Store:' ,store.profile.image)

        },500)

    }


</script>

<style scoped>

    .image-uploader{
        position: relative;
        background-color: #EFEBFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 1rem;
        
    }

    .image-uploader label{
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        z-index: 5;

    }

    input[type="file"] {
        display: none;
    }

    .user-img{
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(.6);
    }

    .image-uploader div{
        z-index: 2;
        position:absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       
    }


    .image-uploader p{
        margin: .4rem;
    }

    

    .haseImage p {
        color: white;
        user-select: none;
    }

    .haseImage img{
        filter: brightness(0) contrast(100%) invert(100%) sepia(0%) saturate(2467%) hue-rotate(51deg) brightness(102%) contrast(102%);
        user-select: none;
    }


    .noImage p {
         color: #623CFF;
         user-select: none;
    }

</style>