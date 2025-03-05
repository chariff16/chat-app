<template>
    <Teleport to="body">
        <div v-if="imageModalStatus" class="fixed top-0 left-0 w-screen h-screen z-50 bg-[#141414bd] backdrop-blur-xs">
            <div class="h-full flex flex-col">
                <div class="flex justify-between items-center px-[5%]">
                    <div class="flex gap-2">
                        <div class="h-[3rem] w-[3rem] rounded-full relative bg-cover bg-center bg-no-repeat"
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
                        <i class="fa-solid fa-xmark text-white text-[1.25rem] cursor-pointer"
                            @click="closeImageModal"></i>
                    </div>
                </div>
                <div class="grow flex justify-center items-center">
                    <img ref="imgTarget" :src="selectedImage.content" alt="" class="h-full">
                </div>
            </div>
        </div>
    </Teleport>
    <!-- Container for messages -->
    <div ref="messagesContainer" class="overflow-y-auto h-full">
        <div v-for="msg in props.messagesList" :key="msg.id" class="flex my-2"
            :class="msg.sender === props.senderName ? 'justify-start' : 'justify-end'">
            <div v-if="msg.type === 'text'" class="p-1 max-w-[80%] rounded-xl"
                :class="msg.sender === props.senderName ? 'bg-[#E8E8E8]' : 'bg-[#6852D6] text-white'">
                <div class="p-2">
                    <p class="">
                        {{ msg.content }}
                    </p>
                    <p class="text-sm text-[0.625rem] text-end mt-1">
                        {{ msg.timestamp }}
                    </p>
                </div>
            </div>
            <div v-if="msg.type === 'image'" class="p-1 max-w-[80%] rounded-xl"
                :class="msg.sender === props.senderName ? 'bg-[#E8E8E8]' : 'bg-[#6852D6] text-white'">
                <img :src="msg.content" alt="" class="rounded-xl cursor-pointer" @click="setSelectedImage(msg)">
                <p class="text-sm text-[0.625rem] text-end mt-1">
                    {{ msg.timestamp }}
                </p>
            </div>
            <div v-if="msg.type === 'video'" class="p-1 max-w-[80%] rounded-xl"
                :class="msg.sender === props.senderName ? 'bg-[#E8E8E8]' : 'bg-[#6852D6] text-white'">
                <video :src="msg.content" controls class="max-w-[16rem]"></video>
                <p class="text-sm text-[0.625rem] text-end mt-1">
                    {{ msg.timestamp }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import { ref, watch, nextTick, onMounted } from 'vue';


const imgTarget = ref(null);

const props = defineProps({
    messagesList: {
        type: Array,
        required: true,
    },
    senderName: {
        type: String,
        required: true,
    },
    userInfo: {
        type: Object,
        required: true,
    },
});

const selectedImage = ref(null);
const imageModalStatus = ref(false);
const messagesContainer = ref(null); // Reference to the messages container

const setSelectedImage = (image) => {
    imageModalStatus.value = true;
    selectedImage.value = image;
};

onClickOutside(imgTarget, () => {
    closeImageModal();
})

const closeImageModal = () => {
    imageModalStatus.value = false;
    selectedImage.value = null;
};

// Function to scroll to the bottom of the messages container
const scrollToBottom = () => {
    if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
};

// Watch for changes in the messages list and scroll to the bottom
watch(() => props.messagesList, () => {
    nextTick(() => {
        scrollToBottom();
    });
}, { deep: true });

// Scroll to the bottom when the component is mounted
onMounted(() => {
    // Use a slight delay to ensure the DOM is fully rendered
    setTimeout(() => {
        nextTick(() => {
            scrollToBottom();
        });
    }, 100); // Adjust the delay if needed
});
</script>

<style scoped>
/* Ensure the messages container takes up the available height */
.overflow-y-auto {
    overflow-y: auto;
}
</style>