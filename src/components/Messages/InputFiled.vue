<template>
    <div class="mx-2 mb-2 h-[5.625rem] flex flex-col gap-[1px] rounded-lg">
        <input type="text" class="w-full px-2 h-[2.5625rem] p-3 bg-white rounded-t-lg outline-none"
            placeholder="Type your message...">
        <div class="h-12 py-2 px-3 flex justify-between bg-white rounded-b-lg">
            <div class="flex gap-4">
                <img :src="add" alt="">
                <img :src="mic" alt="">
                <img :src="emoji" alt="">
                <img :src="gif" alt="">
            </div>
            <div
                class="h-8 w-8 rounded-full bg-[#E8E8E8] hover:bg-[#6852D6] flex justify-center items-center cursor-pointer">
                <img :src="send" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import add from '@/assets/icons/add.svg';
import mic from '@/assets/icons/mic.svg';
import emoji from '@/assets/icons/emoji.svg';
import gif from '@/assets/icons/gif.svg';
import send from '@/assets/icons/send.svg';
</script>

<style lang="scss" scoped></style>