import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
  mk: () => import('@/dictionaries/mk.json').then((m) => m.default),
}

export const locales = Object.keys(dictionaries)
export const defaultLocale = 'en'

export const hasLocale = (locale) => locale in dictionaries

export const getDictionary = async (locale) => dictionaries[locale]()
