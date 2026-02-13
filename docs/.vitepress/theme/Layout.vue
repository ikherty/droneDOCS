<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { watchEffect, computed } from "vue";

const { lang, frontmatter } = useData();
const inBrowser = typeof window !== "undefined";

const authors = computed(() => frontmatter.value.gitAuthors || []);

// Следим за изменением языка и обновляем куки
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`;
  }
});
</script>

<script lang="ts">
export default {
  name: "Layout", // eslint-disable-line vue/multi-word-component-names
};
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-footer-before>
      <div v-if="authors.length" class="authors-section">
        <span class="authors-label">{{ lang.startsWith("ru") ? "Авторы:" : "Authors:" }}</span>
        <span class="authors-list">{{ authors.join(", ") }}</span>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.authors-section {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.authors-label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.authors-list {
  display: inline;
}
</style>
