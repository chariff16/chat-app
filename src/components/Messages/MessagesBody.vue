<template>
    <div class="flex flex-col bg-[#F5F5F5]">
        <MessageHeader />
        <div class="h-div">
            <MessagesList />
        </div>
        <InputFiled />
    </div>
</template>

<script setup>
import MessageHeader from '@/components/Messages/MessageHeader.vue';
import InputFiled from '@/components/Messages/InputFiled.vue';
import { useRoute, useRouter } from 'vue-router';
import MessagesList from '@/components/Messages/MessagesList.vue';



const route = useRoute();
const router = useRouter();


</script>

<style scoped>
.h-div {
    height: calc(100vh - 163px);
    overflow-y: auto;
    padding: 0 1rem;
}
</style>