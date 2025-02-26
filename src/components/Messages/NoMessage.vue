<template>
    <div class="h-screen w-[19.75rem] gap-5 mx-auto flex flex-col justify-center items-center">
        <img :src="emptyChat" alt="">
        <h3 class="font-bold text-center text-[1.125rem]">
            Welcome to Your Conversations
        </h3>
        <p class="text-center">
            Select a chat from the list to start exploring your messages or begin a new conversation
        </p>
    </div>
</template>

<script setup>
import emptyChat from '@/assets/icons/emptyChat.png';
</script>

<style lang="scss" scoped></style>