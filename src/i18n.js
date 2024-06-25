import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import ChainedBackend from "i18next-chained-backend";
import { initReactI18next } from "react-i18next";

const apiKey = "mbNX9vTX1N_hOApnLoolpw";
const i18nexusLoadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;
const localLoadPath = '/locales/{{lng}}/{{ns}}.json';

const savedLanguage = localStorage.getItem('language') || 'es';

i18next
  .use(ChainedBackend) 
  .use(initReactI18next)
  .init({
    lng: savedLanguage,
    fallbackLng: "es",
    ns: ["default"], 
    defaultNS: "default",
    supportedLngs: ["es", "en"],
    backend: {
      backends: [
        HttpBackend,
        HttpBackend 
      ],
      backendOptions: [
        
        {
          loadPath: localLoadPath 
        },
      ]
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });


i18next.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18next;
