<script setup lang="ts">
import { mdiAlertBoxOutline } from "@mdi/js";
import { useGlobalStore } from "@/stores/globalStore";
const store = useGlobalStore();

/** Porps定義 */
interface Props {
  /** 表示テキスト */
  displayText: string;
}
const props = defineProps<Props>();
</script>

<template>
  <v-card color="warning">
    <v-card-text style="display: flex; align-items: center">
      <v-icon :icon="mdiAlertBoxOutline" size="large"></v-icon>
      <div style="white-space: pre-wrap; margin-left: 12px; font-size: large; font-weight: 600">{{ props.displayText }}</div>
    </v-card-text>
  </v-card>
</template>
