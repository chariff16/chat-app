import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserInfoStore = defineStore(
    "annoucementCreationSteps",
    () => {
        const userInfo = ref(null);

        const setUserInfo = (data) => {
            userInfo.value = data;
        };

        const resetUserInfo = () => {
            userInfo.value = null;
        }
        return {
            userInfo,
            setUserInfo,
            resetUserInfo
        };
    },
    {
        persist: true,
    }
);