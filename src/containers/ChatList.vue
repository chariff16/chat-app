<template>
    <aside class="h-screen overflow-y-auto">
        <div class="w-full h-[4rem] px-4 flex justify-between items-center">
            <h2 class="font-bold cursor-pointer" @click="goHome">
                Chats
            </h2>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <ChatIterm v-for="(person, index) in UsersList" @click="selecteUser(index)" :data="person"
            :selected="isSelected(index)" />
    </aside>
</template>

<script setup>
import ChatIterm from '@/components/chat-list/ChatIterm.vue';
import UsersList from '@/assets/data/users.json';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const userSelected = ref(null);
const selecteUser = (index) => {
    userSelected.value = index;
}

const isSelected = (index) => {
    if (index != null) {
        return index === userSelected.value;
    } else {
        return false;
    }
}

const goHome = () => {
    // navigate to home page
    selecteUser(null);
    isSelected(null);
    router.push('/');
}
</script>

<style scoped></style>