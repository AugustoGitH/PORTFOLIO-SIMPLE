import { type Lang, type TranslateKeys } from "@/settings/translate/types";

import normalizeString from "./normalizeString";

interface TranslateWordsParams {
  words: string;
  keys: TranslateKeys;
  lang?: Lang;
}

export default function translateWords({
  keys,
  words,
  lang = "ptbr",
}: TranslateWordsParams): string {
  const selectWords = keys.find(({ ptbr }) => {
    const wordsTrated = normalizeString(words, { toLowerCase: true });

    const keyTrated = normalizeString(ptbr, { toLowerCase: true });
    return keyTrated === wordsTrated;
  });

  return selectWords?.[lang] ?? words;
}
