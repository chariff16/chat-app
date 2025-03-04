import { useBreakpoints } from "@vueuse/core";
import { computed } from "vue";

export const useAppBreakpoints = () => {
    const breakpoints = useBreakpoints({
        md: "913px",
        lg: "1024px",
    });

    const isDesktop = breakpoints.greater("md");

    return { isDesktop, breakpoints };
};