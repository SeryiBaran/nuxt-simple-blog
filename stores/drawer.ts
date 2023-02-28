import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", () => {
  const isOpened = ref(false);

  function toggle() {
    isOpened.value = !isOpened.value;
  }

  return { isOpened, toggle };
});
