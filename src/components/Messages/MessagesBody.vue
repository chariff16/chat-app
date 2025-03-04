<template>
    <div class="flex flex-col bg-[#F5F5F5] w-full">
        <MessageHeader />
        <div class="h-div">
            <MessagesList :messagesList="messagesList" :senderName="sendName" :userInfo="userInfo" />
        </div>
        <InputFiled @send="handleSendMessage" />
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
</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
    padding: 0 1rem;
}
</style>