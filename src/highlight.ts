import hljs from "highlight.js";
import { terraform } from "./languages/terraform";

terraform(hljs);
// Add additional `hljs` configuration here

export function highlight(language: string, code: string) {
  return hljs.highlight(code, { language });
}

export function supportsLanguage(language: string) {
  return typeof hljs.getLanguage(language) !== "undefined";
}

export function getFullLanguageName(languageName: string) {
  const language = hljs.getLanguage(languageName);
  if (!language) {
    return undefined;
  }

  return language.name;
}

export function listLanguages() {
  return hljs.listLanguages().map((language) => {
    return {
      language: language,
      name: hljs.getLanguage(language)?.name || language,
    };
  });
}
