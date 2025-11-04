import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function ProfileButton({imageUrl}) {
    return (
        <Link to="/settings" className="flex items-center justify-center rounded-2xl">
            <div className="w-11.5 h-11.5 aspect-square shadow-md rounded-full bg-panel flex items-center justify-center hover:bg-panel/60 active:bg-panel">
            {
                imageUrl ? (
                    <img
                    src={imageUrl}
                    alt="avatar"
                    className="w-full h-full object-cover" 
                    />
                ) : (
                    <FontAwesomeIcon icon={faUser} className="text-neutral text-xl"/>
                )}
            </div>
        </Link>
    );
}