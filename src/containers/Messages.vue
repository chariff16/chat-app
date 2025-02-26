<template>
    <div class="flex grow flex-col bg-[#F5F5F5]">
        <router-view />
    </div>
</template>

<script setup>
import MessageHeader from '@/components/Messages/MessageHeader.vue';
import MessageBody from '@/components/Messages/MessagesBody.vue';
import InputFiled from '@/components/Messages/InputFiled.vue';
import NoMessage from '@/components/Messages/NoMessage.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped></style>