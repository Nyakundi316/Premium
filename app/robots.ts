import type { MetadataRoute } from "next";
import { SITE } from "./lib/site";

// Answer-engine and AI-search crawlers we explicitly welcome. Listing them
// keeps the site quotable in AI answers and guards against a future blanket
// rule accidentally shutting them out. The trailing "*" group keeps the same
// open policy for everyone else.
const answerEngineBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "DuckAssistBot",
  "CCBot",
  "cohere-ai",
  "YouBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: answerEngineBots, allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    host: SITE.url,
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
