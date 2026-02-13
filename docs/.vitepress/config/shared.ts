import { defineConfig, type HeadConfig } from "vitepress";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { createContentLoader, type SiteConfig } from "vitepress";
import { Feed } from "feed";

export const shared = defineConfig({
  rewrites: { "en/:rest*": ":rest*" },
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  transformPageData(pageData) {
    // 1. Meta Description
    if (!pageData.frontmatter.description && pageData.filePath) {
      try {
        const fullPath = path.resolve(process.cwd(), "docs", pageData.filePath);
        if (fs.existsSync(fullPath)) {
          const description = excerpt(fs.readFileSync(fullPath, "utf-8"));
          if (description) {
            pageData.description = description;
            pageData.frontmatter.description = description;
          }
        }
      } catch (e: unknown) {
        console.error(`Failed to generate description for ${pageData.filePath}`, e);
      }
    }

    // 2. Simple Authors from Git
    if (pageData.filePath) {
      try {
        const fullPath = path.resolve(process.cwd(), "docs", pageData.filePath);
        const history = execSync(`git log --follow --format="%an|%ae" -- "${fullPath}"`, { encoding: "utf-8" })
          .split("\n")
          .map((l: string) => l.trim())
          .filter(Boolean);

        const emailsUsed = new Set<string>();
        const namesUsed = new Set<string>();
        const authors: string[] = [];

        for (const line of history) {
          const [name, email] = line.split("|");
          if (!name || !email || email.includes("[bot]") || emailsUsed.has(email)) continue;

          emailsUsed.add(email);
          if (!namesUsed.has(name)) {
            namesUsed.add(name);
            authors.push(name);
          }
        }

        if (authors.length > 0) {
          pageData.frontmatter.gitAuthors = authors;
        }
      } catch {
        // ignore errors during author extraction
      }
    }
  },

  transformHead({ pageData }) {
    const head: HeadConfig[] = [];
    if (pageData.description) {
      head.push(["meta", { property: "og:description", content: pageData.description }]);
      head.push(["meta", { name: "twitter:description", content: pageData.description }]);
    }
    if (pageData.title) {
      head.push(["meta", { property: "og:title", content: pageData.title }]);
      head.push(["meta", { name: "twitter:title", content: pageData.title }]);
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: pageData.title,
      description: pageData.description,
      author: pageData.frontmatter.gitAuthors
        ? pageData.frontmatter.gitAuthors.map((name: string) => ({ "@type": "Person", name }))
        : { "@type": "Organization", name: "PropWash Service" },
    };
    head.push(["script", { type: "application/ld+json" }, JSON.stringify(jsonLd)]);
    return head;
  },

  buildEnd: async (config: SiteConfig) => {
    await generateFeed(config);
  },
  sitemap: { hostname: "https://propwashservice.com" },
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    ["link", { rel: "alternate", type: "application/rss+xml", title: "RSS Feed", href: "/feed.rss" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:title", content: "DroneDocs" }],
    ["meta", { property: "og:site_name", content: "DroneDocs" }],
    ["meta", { property: "og:url", content: "https://propwashservice.com" }],
    ["meta", { name: "yandex-verification", content: "58a811d9cca96300" }],
    ["meta", { name: "google-site-verification", content: "GKGhVs-Wh-b7yIw0IU46GlNUZWjNaBgqHtkWT_jZrQs" }],
    [
      "script",
      { type: "text/javascript" },
      '(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(92209567, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });',
    ],
  ],

  themeConfig: {
    siteTitle: "Drone Docs",
    logo: "/favicon.svg",
    socialLinks: [
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>',
        },
        link: "https://t.me/propwash",
      },
      { icon: "github", link: "https://github.com/ikherty/droneDocs" },
      { icon: "youtube", link: "https://www.youtube.com/@PropWashService" },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          ru: {
            translations: {
              button: { buttonText: "Поиск", buttonAriaLabel: "Поиск" },
              modal: {
                noResultsText: "Нет результатов по запросу",
                resetButtonTitle: "Сбросить поиск",
                footer: { selectText: "выбрать", navigateText: "перейти", closeText: "закрыть" },
              },
            },
          },
        },
      },
    },
  },
  vite: { plugins: [ViteImageOptimizer()] },
});

function excerpt(content: string) {
  if (!content) return "";
  const stripped = content
    .replace(/^---[\s\S]*?---\n*/, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/#+ .*/g, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/<.*?>/g, "")
    .replace(/`{1,3}.*?`{1,3}/gs, "")
    .replace(/&[a-z0-9#]+;/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  return stripped.length > 160 ? stripped.slice(0, 157) + "..." : stripped;
}

async function generateFeed(config: SiteConfig) {
  const hostname = "https://propwashservice.com";
  const feed = new Feed({
    title: "DroneDocs",
    description: "FPV Guides",
    id: hostname,
    link: hostname,
    language: "ru",
    image: `${hostname}/favicon.svg`,
    favicon: `${hostname}/favicon.svg`,
    copyright: "PropWash Service",
  });
  const posts = await createContentLoader("**/*.md", { excerpt: true, render: true }).load();
  posts.sort((a, b) => +new Date(b.frontmatter.date || 0) - +new Date(a.frontmatter.date || 0));
  for (const { url, excerpt, frontmatter, html } of posts) {
    if (url.includes("/public/")) continue;
    feed.addItem({
      title: frontmatter.title || "DroneDocs Article",
      id: `${hostname}${url}`,
      link: `${hostname}${url}`,
      description: excerpt,
      content: html,
      author: [{ name: "PropWash Service", link: hostname }],
      date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
    });
  }
  const outDir = path.resolve(config.outDir);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "feed.rss"), feed.rss2());
}
