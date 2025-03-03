<template>
    <Teleport to="body">
        <div v-if="imageModalStatus" class="fixed top-0 left-0 w-screen h-screen z-50 bg-[#141414]/80 backdrop-blur-xs">
            <div class="flex justify-between items-center px-[5%]">
                <div class="flex gap-2">
                    <div class=" h-[3rem] w-[3rem] rounded-full relative bg-cover bg-center bg-no-repeat"
                        :style="`background-image : url('${props.userInfo.profilePic}')`"></div>
                    <div class="text-white">
                        <p class="font-medium">
                            {{ props.userInfo.name }}
                        </p>
                        <p class="text-[#A1A1A1] text-[0.75rem]">
                            {{ selectedImage.datestamp }} at {{ selectedImage.timestamp }}
                        </p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-xmark text-white text-[1.25rem] cursor-pointer" @click="closeImageModal"></i>
                </div>
            </div>
            <div class="w-full h-full flex justify-center items-center">
                <img :src="selectedImage.content" alt="">
            </div>
        </div>
    </Teleport>
    <div v-for="msg in props.messagesList" class="flex my-2 "
        :class="msg.sender === props.senderName ? 'justify-start' : ' justify-end'">
        <div v-if="msg.type === 'text'" class="p-1 max-w-[80%] rounded-xl"
            :class="msg.sender === props.senderName ? 'bg-[#E8E8E8]' : ' bg-[#6852D6] text-white'">
            <div class="p-2">
                <p class="">
                    {{ msg.content }}
                </p>
                <p class="text-sm  text-[0.625rem] text-end mt-1">
                    {{ msg.timestamp }}
                </p>
            </div>
        </div>
        <div v-if="msg.type === 'image'" class="p-1  max-w-[80%] rounded-xl"
            :class="msg.sender === props.senderName ? 'bg-[#E8E8E8]' : ' bg-[#6852D6] text-white'">
            <img :src="msg.content" alt="" class="rounded-xl cursor-pointer" @click="setSelectedImage(msg)">
            <p class="text-sm  text-[0.625rem] text-end mt-1">
                {{ msg.timestamp }}
            </p>
        </div>
        <div v-if="msg.type === 'video'" class="p-1  max-w-[80%] rounded-xl"
            :class="msg.sender === props.senderName ? 'bg-[#E8E8E8]' : ' bg-[#6852D6] text-white'">
            <video :src="msg.content" controls class="max-w-[16rem]"></video>
            <p class="text-sm  text-[0.625rem] text-end mt-1">
                {{ msg.timestamp }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    messagesList: {
        type: Object
    },
    senderName: {
        type: String
    },
    userInfo: {
        type: Object
    }
})


const selectedImage = ref(null);
const imageModalStatus = ref(false);

const setSelectedImage = (image) => {
    imageModalStatus.value = true;
    selectedImage.value = image;
}

const closeImageModal = () => {
    imageModalStatus.value = false;
    selectedImage.value = null;
}

</script>

<style scoped></style>