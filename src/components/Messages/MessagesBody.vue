<template>
    <div class="flex flex-col bg-[#F5F5F5] w-full">
        <MessageHeader />
        <div class="h-div">
            <MessagesList :messagesList="messagesList" :senderName="sendName" :userInfo="userInfo" />
        </div>
        <InputFiled @send="handleSendMessage" @file-selected="handleFile" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import MessageHeader from '@/components/Messages/MessageHeader.vue';
import InputFiled from '@/components/Messages/InputFiled.vue';
import MessagesList from '@/components/Messages/MessagesList.vue';
import messagesData from '@/assets/data/messages.json';
import users from '@/assets/data/users.json';

const route = useRoute();


const messages = ref(messagesData);

const userInfo = users.find(user => user.id == route.params.id);

const messagesList = computed(() => {
    return messages.value[route.params.id].message;
});

const sendName = computed(() => {
    return messages.value[route.params.id].name;
});

const handleSendMessage = (messageContent) => {
    const newMessage = {
        content: messageContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        type: 'text',
        sender: 'Me',
        receiver: true
    };

    // Push the new message into the reactive messages array
    messages.value[route.params.id].message.push(newMessage);

    // Log the updated messages (optional)
    console.log(messages.value[route.params.id].message);
};

const handleFile = (date) => {
    // console.log('data :', date);
    const reader = new FileReader();
    reader.readAsDataURL(date);
    reader.onload = (e) => {
        const mediaUrl = e.target.result;
        // console.log('e', e.srcElement.result);
        // console.log('e.target', e.target);
        // console.log('mediaUrl', mediaUrl);
        messages.value[route.params.id].message.push({
            content: mediaUrl,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: date.type.startsWith("image/") ? "image" : "video",
            sender: "Me",
            receiver: true,
        });
    };
};
</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
    padding: 0 1rem;
}
</style>