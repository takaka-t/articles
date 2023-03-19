<script setup lang="ts">
import { mdiAlertBoxOutline } from "@mdi/js";
import { useGlobalStore } from "@/stores/globalStore";
import { onMounted } from "vue";
const store = useGlobalStore();

onMounted(async () => {
  // ローディング解除
  store.isLoading = false;
});
</script>

<template>
  <v-card color="warning" class="mx-auto pt-5" style="width: 30%; min-width: 300px; height: 20%; min-height: 150px; text-align: center">
    <v-card-item>
      <v-card-title>
        <!-- <v-icon :icon="mdiAlertBoxOutline"></v-icon> -->
        404
      </v-card-title>
      <v-card-subtitle>Not Found</v-card-subtitle>
    </v-card-item>
    <v-card-text>存在しないページです</v-card-text>
  </v-card>
</template>
