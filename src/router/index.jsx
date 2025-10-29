import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Watched from "../pages/Watched";
import FilmDetail from "../pages/FilmDetail";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="watched" element={<Watched />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="film/:id" element={<FilmDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}