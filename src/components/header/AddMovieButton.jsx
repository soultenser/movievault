import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export default function AddMovieButton({onClick, label}) {
    return (
        <button 
        onClick={onClick} 
        className="p-2 pl-2.5 pr-2.5 rounded-xl md:p-2.5 md:pl-5 md:pr-5 md:text-base text-sm hover:bg-panel/60 active:bg-panel bg-panel text-clear text-nowrap flex gap-2 flex-nowrap justify-center items-center">
        <FontAwesomeIcon icon={faPlus} className="text-accent"/>
        <span>{label}</span>
        </button>
    )
}