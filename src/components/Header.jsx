import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header className="bg-primary p-4 md:p-8 md:flex">
            <div>
                <Link to="/" className="text-clear text-3xl md:text-4xl font-semibold"> MOVIEVAULT </Link>

            </div>
        </header>
    );
}