import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {

	return (
		<div className="font-display">
				<Header />
			<div className="min-h-screen font-display md:flex">
				<Navbar />
				<main className="p-4">
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default App
