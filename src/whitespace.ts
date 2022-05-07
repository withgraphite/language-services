import { getFullLanguageName } from "./highlight";

const CAN_IGNORE_WHITESPACE = [
  "JavaScript",
  "C",
  "C++",
  "CSS",
  "JSON",
  "Python",
  "TypeScript"
];

export function canIgnoreWhitespace(language: string): boolean {
  const fullLanguageName = getFullLanguageName(language);
  return fullLanguageName ? CAN_IGNORE_WHITESPACE.includes(fullLanguageName) : false;
}
