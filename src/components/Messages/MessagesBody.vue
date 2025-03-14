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

const handleFile = (data) => {
    // console.log('data :', data);
    let newMessage = {};
    let valid = false;
    if (data.type == 'video') {
        // console.log('this is a video');
        newMessage = {
            content: '/chatVideo/video1.mp4',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            type: 'video',
            sender: 'Me',
            receiver: true
        };
        valid = true;
    } else if (data.type == 'image') {
        // console.log('this is a image');
        newMessage = {
            content: '/chatImage/chatImage1.png',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            type: 'image',
            sender: 'Me',
            receiver: true
        };
        valid = true;
    } else {
        valid = false;
    }
    if (valid) {
        messages.value[route.params.id].message.push(newMessage);
        // console.log(messages.value[route.params.id].message);
    } else {
        alert('Invalid file type');
    }
};
</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
    padding: 0 1rem;
}
</style>