<template>
    <div class="w-full h-[4rem] flex justify-between items-center px-4 py-2 bg-white">
        <div class="flex gap-2">
            <div class=" h-[3rem] w-[3rem] rounded-full relative bg-cover bg-center bg-no-repeat"
                :style="`background-image : url('${User.profilePic}')`"></div>
            <div class="">
                <p class="font-medium">
                    {{ User.name }}
                </p>
                <p class="text-[#727272]">
                    {{ User.isOnline ? 'online' : '' }}
                </p>
            </div>
        </div>
        <!-- <div class="flex gap-4">
            <img :src="video" alt="">
            <img :src="call" alt="">
            <img :src="ai" alt="">
            <img :src="info" alt="">
        </div> -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import messages from '@/assets/data/messages.json';
import video from '@/assets/icons/video-icon.svg';
import call from '@/assets/icons/call-icon.svg';
import ai from '@/assets/icons/ai-icon.svg';
import info from '@/assets/icons/info-icon.svg';
import { computed } from 'vue';

const route = useRoute();

const User = computed(() => {
    return messages[route.params.id];
})

</script>

<style scoped></style>