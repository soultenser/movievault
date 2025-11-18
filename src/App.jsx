import Navbar from "./components/Navbar"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {

	const { i18n } = useTranslation();

	useEffect(() => {
		const savedLang = localStorage.getItem('app-language');
		if (savedLang && savedLang !== i18n.language) {
			i18n.changeLanguage(savedLang);
		}
	}, []);

	return (
		<div className="min-h-screen font-display bg-primary">
				<Header />
			<div className="font-display md:flex">
				<Navbar />
				<div className="h-auto w-full md:mt-20 2xl:ml-77 md:ml-35 lg:ml-45 md:mr-8 mb-20 bg-primary">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default App
