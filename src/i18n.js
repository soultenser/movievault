import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationIT from "./locales/it/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
    en: { translation: translationEN },
    it: { translation: translationIT }
}

i18next.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18next;