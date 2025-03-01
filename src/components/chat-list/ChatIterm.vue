<template>
    <RouterLink :to="`/message/${props.data.messageID}`">
        <div class="h-[4.5rem] flex gap-3  px-4 py-3 cursor-pointer"
            :class="selected ? 'bg-[#E8E8E8]' : 'hover:bg-[#E8E8E8]'">
            <div class=" h-[3rem] w-[3rem] rounded-full relative bg-cover bg-center bg-no-repeat"
                :style="`background-image : url('${props.data.profilePic}')`">
                <div v-if="props.data.isOnline"
                    class="bg-green-400 h-3 w-3 rounded-full absolute right-0 bottom-0 border-white border-[2px]">
                </div>
            </div>
            <div class="flex flex-col grow">
                <div class="flex justify-between items-center">
                    <p class="font-medium">
                        {{ props.data.name }}
                    </p>
                    <p class="text-[0.75rem] text-[#727272]">
                        {{ props.data.lastMessageTime }}
                    </p>
                </div>
                <p class="text-gray-400 text-[0.875rem]">
                    {{ props.data.lastMessage }}
                </p>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(
    {
        data: {
            type: Object
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
);

// console.log(props.data);

</script>

<style lang="scss" scoped></style>