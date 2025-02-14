// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'

import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'
import am from './locales/am/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources: {
      en: {
        translation: en,
      },
      am: {
        translation: am,
      },
      ru: {
        translation: ru,
      }, 
    },

    lng: 'ru',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
