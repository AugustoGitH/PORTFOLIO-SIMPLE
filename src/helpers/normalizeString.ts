interface IOptionsNormalizeString {
  specificChar?: string;
  toLowerCase?: boolean;
  toUpperCase?: boolean;
  replaceSpaces?: boolean; // Novo parâmetro para substituir espaços por '-'
}

const normalizeString = (
  str: string,
  options?: IOptionsNormalizeString
): string => {
  const stringWithoutAccents = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const regexRomoveCharsSpecial = new RegExp(
    `[^a-zA-Z0-9 ${options?.specificChar ?? ""}]`,
    "g"
  );

  let normalizeString = stringWithoutAccents.replace(
    regexRomoveCharsSpecial,
    ""
  );

  if (options?.replaceSpaces) {
    normalizeString = normalizeString.replace(/\s+/g, "-");
  }

  if (options?.toLowerCase) {
    return normalizeString.toLowerCase();
  }

  if (options?.toUpperCase) {
    return normalizeString.toUpperCase();
  }

  return normalizeString.trim();
};

export default normalizeString;
