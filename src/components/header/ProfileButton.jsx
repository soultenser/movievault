import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ProfileButton() {
    return (
        <Link to="/settings" className="flex items-center justify-center rounded-2xl">
            <div className="w-11.5 h-11.5 rounded-full bg-panel flex items-center justify-center hover:bg-panel/60 active:bg-panel">
                <FontAwesomeIcon icon={faUser} className="text-neutral text-xl"/>
            </div>
        </Link>
    );
}