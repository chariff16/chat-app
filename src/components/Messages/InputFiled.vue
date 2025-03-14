<template>
    <div class="mx-2 mb-2 h-[5.625rem] flex flex-col gap-[1px] rounded-lg">
        <input type="text" v-model="messageText" @keyup.enter="sendMessage"
            class="w-full px-2 h-[2.5625rem] p-3 bg-white rounded-t-lg outline-none" placeholder="Type your message...">
        <div class="h-12 py-2 px-3 flex justify-between bg-white rounded-b-lg">
            <div class="flex gap-4">
                <!-- Add Image Button -->
                <img :src="add" alt="" @click="triggerFileInput" class="cursor-pointer">
                <!-- Hidden File Input -->
                <input type="file" ref="fileInput" @change="handleFileSelect" accept="image/*, video/*"
                    style="display: none;">
                <!-- <img :src="mic" alt="">
                <img :src="emoji" alt="">
                <img :src="gif" alt=""> -->
            </div>
            <div @click="sendMessage" class="h-8 w-8 rounded-full flex justify-center items-center cursor-pointer"
                :class="hasText ? 'bg-[#6852D6]' : 'bg-[#E8E8E8]'">
                <img :src="send" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import send from '@/assets/icons/send.svg';
import add from '@/assets/icons/add.svg'; // Import the add icon

const messageText = ref('');
const fileInput = ref(null); // Reference to the file input element

const hasText = computed(() => {
    return messageText.value.length > 0
});

const emit = defineEmits(['send', 'file-selected']); // Add 'file-selected' event

const sendMessage = () => {
    if (messageText.value.trim()) {
        emit('send', messageText.value); // Emit the message text
        messageText.value = ''; // Clear the input field
    }
};

// Function to trigger the file input
const triggerFileInput = () => {
    fileInput.value.click(); // Programmatically click the hidden file input
};

// Function to handle file selection
const handleFileSelect = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const fileType = file.type.split('/')[0]; // Get the file type (image or video)
        emit('file-selected', { file, type: fileType }); // Emit the file and its type
    }
};
</script>