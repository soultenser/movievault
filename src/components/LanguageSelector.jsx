import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    // salva la scelta in localStorage per ricordarla
    localStorage.setItem('language', lang);
  };

  return (
    <div className="language-selector text-clear w-full md:block flex justify-between items-center">
      <label htmlFor="language" className='text-lg md:text-xl md:mr-6'>{t('language')}:</label>
      <select
        id="language"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="p-g pl-4 pr-4 pt-1 pb-1 text-lg md:text-xl rounded border border-clear"
      >
        <option value="en" className='text-primary'>English</option>
        <option value="it" className='text-primary'>Italiano</option>
      </select>
    </div>
  );
}