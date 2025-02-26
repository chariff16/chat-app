<template>
    <section class="flex font-[Roboto]">
        <ChatList class="w-[26.25rem]" />
        <Messages />
    </section>
</template>

<script setup>
// import { RouterView } from 'vue-router';
import ChatList from '@/containers/ChatList.vue';
import Messages from '@/containers/Messages.vue';

</script>

<style scoped></style>