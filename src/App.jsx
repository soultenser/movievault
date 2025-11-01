import Navbar from "./components/Navbar"
import Header from "./components/header/Header"
import { Outlet } from "react-router-dom"

function App() {

	return (
		<div className="min-h-screen font-display">
				<Header />
			<div className="font-display md:flex bg-primary">
				<Navbar />
				<main className="min-h-screen w-full md:mr-8 md:ml-0 p-10 md:p-6">
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default App
