<template>

    <div class="image-uploader" >
        <img :src="imgSrc" v-if="imgSrc" class="user-img" />
       <div :class="imgSrc? 'haseImage' : 'noImage'">
           <img src="/images/icon-upload-image.svg" />
           <p v-if="imgSrc">Change Image</p>
           <p v-else>+ Upload Image</p>
       </div>
    </div>

</template>

<script setup>

    const props = defineProps({
        imgSrc : String
    });

</script>

<style scoped>

    .image-uploader{
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
    }

    .haseImage img{
        filter: brightness(0) contrast(100%) invert(100%) sepia(0%) saturate(2467%) hue-rotate(51deg) brightness(102%) contrast(102%);;
    }


    .noImage p {
         color: #623CFF;
    }

</style>