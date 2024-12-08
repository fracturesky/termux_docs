import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("Layout", Layout);
  },
};
