import { defineConfig } from "vitepress";
import { shared } from "./shared";
import { en } from "./en";
import { ru } from "./ru";

export default defineConfig({
  ...shared,
  locales: {
    ru: { label: "Русский", ...ru },
    root: { label: "English", ...en },
  },
});
