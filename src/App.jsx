import Navbar from "./components/Navbar"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"

function App() {

	return (
		<div className="min-h-screen font-display bg-primary">
				<Header />
			<div className="font-display md:flex">
				<Navbar />
				<main className="h-auto w-full md:mt-20 lg:ml-78 md:ml-45 md:mr-8 mb-20 bg-primary">
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default App
