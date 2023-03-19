import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useGlobalStore = defineStore(
  "globalStore",
  () => {
    /** ローディング中かどうか */
    const isLoading = ref(false);

    return { isLoading };
  },
  { persist: true } // pinia-plugin-persistedstate 永続化(LocalStorage)
);
