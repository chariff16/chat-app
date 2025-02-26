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
// import MessageBody from '@/components/Messages/MessagesBody.vue';
import InputFiled from '@/components/Messages/InputFiled.vue';
</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
}
</style>