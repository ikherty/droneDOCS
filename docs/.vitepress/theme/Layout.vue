<!-- docs/.vitepress/theme/Layout.vue -->
<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { ref, watchEffect } from "vue";

const { lang } = useData();
const inBrowser = typeof window !== "undefined";

// Функция для получения значения куки
function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Устанавливаем язык из куки, если он существует
if (inBrowser) {
  const savedLang = getCookie("nf_lang");
  if (savedLang) {
    lang.value = savedLang;
  }
}

// Следим за изменением языка и обновляем куки
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`;
  }
});

// Функция для переключения языка
function switchLanguage(newLang: string) {
  lang.value = newLang;
}
</script>

<template>
  <DefaultTheme.Layout />
  <button @click="switchLanguage('ru')">Русский</button>
  <button @click="switchLanguage('root')">English</button>
</template>
