import hljs from "highlight.js";
import terraform from "highlightjs-terraform";

terraform(hljs);
// Add additional `hljs` configuration here

export function highlight(language: string, code: string) {
  return hljs.highlight(language, code);
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
