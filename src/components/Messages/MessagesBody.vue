<template>
    <div class="flex flex-col bg-[#F5F5F5]">
        <MessageHeader />
        <!-- <MessageBody class="grow" /> -->
        <div class="h-div">

        </div>
        <InputFiled />
    </div>
</template>

<script setup>
import MessageHeader from '@/components/Messages/MessageHeader.vue';
import InputFiled from '@/components/Messages/InputFiled.vue';
import { useRoute, useRouter } from 'vue-router';
import messages from '@/assets/data/messages.json';



const route = useRoute();
const router = useRouter();


console.log('route param :', route.params.id);
console.log('this is the messages', messages);



</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1rem;
}
</style>