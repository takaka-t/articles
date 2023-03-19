<script setup lang="ts">
import { computed } from "vue";
import { useGlobalStore } from "@/stores/globalStore";
import { RoutePaths } from "./router";
import { RouterView, useRouter } from "vue-router";
import { mdiDomain } from "@mdi/js";

const router = useRouter();
const globalStore = useGlobalStore();

/** ナビゲーションアイテムModel */
interface navigationItem {
  icon: string;
  title: string;
  path: string;
}

/** ナビゲーションアイテム配列 */
const navigationItems = computed<navigationItem[]>(() => {
  return [{ icon: mdiDomain, title: "トップ", path: `${RoutePaths.top}` }];
});
</script>

<template>
  <v-app>
    <v-dialog v-model="globalStore.isLoading" persistent style="width: 100%; height: 100%; z-index: 10000">
      <v-progress-circular :indeterminate="globalStore.isLoading" :size="100" color="primary" class="mx-auto"></v-progress-circular>
    </v-dialog>

    <v-app-bar color="primary" prominent>
      <v-app-bar-title class="ml-10"><strong style="border-bottom: 1rem solid">My理想</strong></v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer permanent color="secondary">
      <v-list>
        <v-list-item v-for="(item, i) in navigationItems" :key="i" :value="item" active-color="black" :to="{ path: item.path }">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style></style>
