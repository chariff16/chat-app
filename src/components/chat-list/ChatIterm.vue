<template>
    <div class="h-[4.5rem] flex gap-3 bg-[#E8E8E8] px-4 py-3 cursor-pointer">
        <div class=" h-[3rem] w-[3rem] rounded-full relative bg-cover bg-center bg-no-repeat"
            :style="`background-image : url('${user}')`">
            <div class="bg-green-400 h-3 w-3 rounded-full absolute right-0 bottom-0 border-white border-[2px]">
            </div>
        </div>
        <div class="flex flex-col grow">
            <div class="flex justify-between items-center">
                <p class="font-medium">
                    George Alan
                </p>
                <p class="text-[0.75rem] text-[#727272]">
                    12:12 PM
                </p>
            </div>
            <p class="text-gray-400 text-[0.875rem]">
                last message
            </p>
        </div>
    </div>
</template>

<script setup>
import user from '@/assets/users-images/user1.png';
</script>

<style lang="scss" scoped></style>