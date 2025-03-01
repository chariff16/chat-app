<template>
    <div class="flex flex-col bg-[#F5F5F5]">
        <MessageHeader />
        <!-- <MessageBody class="grow" /> -->
        <div class="h-div">
            <div v-for="msg in messages[route.params.id].message" class="flex"
                :class="msg.sender === messages[route.params.id].name ? 'justify-start' : ' justify-end'">
                <div class=" p-1 w-fit rounded-xl"
                    :class="msg.sender === messages[route.params.id].name ? 'bg-[#E8E8E8]' : ' bg-[#6852D6] text-white'">
                    <div class="p-2">
                        <p class="">
                            {{ msg.content }}
                        </p>
                        <p class="text-sm  text-[0.625rem] text-end mt-1">
                            {{ msg.timestamp }}
                        </p>
                    </div>
                </div>
            </div>
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
console.log('this is the messages', messages[route.params.id]);
// Object.keys(messages)



</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0 1rem;
}
</style>