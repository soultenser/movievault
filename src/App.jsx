import Navbar from "./components/Navbar"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

function App() {

	return (
		<div className="min-h-screen font-display">
				<Header />
			<div className="font-display md:flex">
				<Navbar />
				<main className="h-screen w-full p-10 md:p-6 bg-primary">
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default App
