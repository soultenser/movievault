import LanguageSelector from "../components/LanguageSelector";
import { useTranslation } from "react-i18next";

export default function Settings() {
    const { t } = useTranslation();

    return (
        <div className= "w-full bg-primary pt-2">
            <h1 className="text-clear font-display text-2xl md:text-3xl mb-2">{t('settings')}</h1>
            <div className="container w-full pt-4 pb-4 md:block flex justify-center items-center">
                <LanguageSelector />
            </div>
        </div>
    );
}