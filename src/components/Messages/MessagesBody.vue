<template>
    <div class="flex flex-col bg-[#F5F5F5]">
        <MessageHeader />
        <div class="h-div">
            <MessagesList :messagesList="messagesList" :senderName="sendName" :userInfo="userInfo" />
        </div>
        <InputFiled />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MessageHeader from '@/components/Messages/MessageHeader.vue';
import InputFiled from '@/components/Messages/InputFiled.vue';
import MessagesList from '@/components/Messages/MessagesList.vue';
import messages from '@/assets/data/messages.json';
import users from '@/assets/data/users.json'



const route = useRoute();
const router = useRouter();


const userInfo = users.find(user => user.id == route.params.id);
const messagesList = computed(() => {
    return messages[route.params.id].message;
});

const sendName = computed(() => {
    return messages[route.params.id].name;
})


</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
    padding: 0 1rem;
}
</style>