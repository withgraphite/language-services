import hljs from "highlight.js";
import { svelte } from "./languages/svelte";
import { terraform } from "./languages/terraform";

terraform(hljs);
svelte(hljs);
// Add additional `hljs` configuration here

const VSCODE_SYNTAX_HIGHLIGHTING_LANGUAGES = ["textproto", "Vue"];

export function highlight(language: string, code: string) {
  return hljs.highlight(code, { language });
}

export function supportsLanguage(language: string) {
  return VSCODE_SYNTAX_HIGHLIGHTING_LANGUAGES.includes(language) || typeof hljs.getLanguage(language) !== "undefined";
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
  }).concat(VSCODE_SYNTAX_HIGHLIGHTING_LANGUAGES.map((language) => {
    return {
      language: language,
      name: language,
      };
  }));
}
