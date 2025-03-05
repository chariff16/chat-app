<template>
    <div class="mx-2 mb-2 h-[5.625rem] flex flex-col gap-[1px] rounded-lg">
        <input type="text" v-model="messageText" @keyup.enter="sendMessage"
            class="w-full px-2 h-[2.5625rem] p-3 bg-white rounded-t-lg outline-none" placeholder="Type your message...">
        <div class="h-12 py-2 px-3 flex justify-between bg-white rounded-b-lg">
            <div class="flex gap-4">
                <!-- <img :src="add" alt="">
                <img :src="mic" alt="">
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
// import add from '@/assets/icons/add.svg';
// import mic from '@/assets/icons/mic.svg';
// import emoji from '@/assets/icons/emoji.svg';
// import gif from '@/assets/icons/gif.svg';
import send from '@/assets/icons/send.svg';

const messageText = ref('');

const hasText = computed(() => {
    return messageText.value.length > 0
});

const emit = defineEmits(['send']);

const sendMessage = () => {
    if (messageText.value.trim()) {
        emit('send', messageText.value); // Emit the message text
        messageText.value = ''; // Clear the input field
    }
};
</script>

<style lang="scss" scoped></style>