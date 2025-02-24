<template>
    <aside class="h-screen overflow-y-auto">
        <div class="w-full h-[4rem] px-4 flex justify-between items-center">
            <h2 class="font-bold">
                Chats
            </h2>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <ChatIterm />
    </aside>
</template>

<script setup>
import ChatIterm from '@/components/chat-list/ChatIterm.vue';
</script>

<style scoped></style>