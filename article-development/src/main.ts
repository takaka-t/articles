import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/main.css";

// Router
import router from "@/router";

// Pinia
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(createPersistedState());

// Vuetify
import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#E85D3A",
    secondary: "#bc867e",
    success: "#F7B3A2", //pink
    accent: "#333",
    info: "#333",
    warning: "#ff0000",
    error: "#ff0000",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "mainTheme",
    themes: {
      mainTheme,
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

// errorHandler
import { errorHandler } from "@/errorHandler";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vuetify);
app.use(errorHandler);

app.mount("#app");
