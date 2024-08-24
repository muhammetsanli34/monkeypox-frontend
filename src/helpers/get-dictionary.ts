const locales = {
    en: import('../dictionaries/en.json'),
    tr: import('../dictionaries/tr.json'),
} 

export default async function getDictionary(locale: "en" | "tr") {
    return (await locales[locale]).default;
}