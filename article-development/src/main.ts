import { createApp } from "vue";
import App from "@/App.vue";

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
    primary: "#208060",
    secondary: "#D1E2CA",
    info: "#7a7a7a",
    accent: "#333",
    warning: "#ff0000",
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
