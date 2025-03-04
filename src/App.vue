<template>
  <section class="flex font-roboto">
    <ChatList v-if="showChatList" class="w-full md:w-[26.25rem]" />
    <RouterView v-if="showMessages" />
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import { useAppBreakpoints } from '@/utils/breakpoints';
import ChatList from '@/containers/ChatList.vue';

const breakpoints = useAppBreakpoints();
const route = useRoute();

const isDesktop = breakpoints.isDesktop;

const showChatList = computed(() => {
  return isDesktop.value || route.name === 'Home';
});

const showMessages = computed(() => {
  return isDesktop.value || route.name === 'message';
});
</script>

<style lang="scss" scoped></style>