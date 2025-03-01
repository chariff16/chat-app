<template>
    <div v-for="msg in messages[route.params.id].message" class="flex"
        :class="msg.sender === messages[route.params.id].name ? 'justify-start' : ' justify-end'">
        <div v-if="msg.type === 'text'" class="p-1 w-fit rounded-xl"
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
        <div v-if="msg.type === 'image'" class="p-1 w-fit rounded-xl"
            :class="msg.sender === messages[route.params.id].name ? 'bg-[#E8E8E8]' : ' bg-[#6852D6] text-white'">
            <img :src="msg.content" alt="">
            <p class="text-sm  text-[0.625rem] text-end mt-1">
                {{ msg.timestamp }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import messages from '@/assets/data/messages.json';

const route = useRoute();
</script>

<style scoped></style>