import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function SearchBar({value, placeholder, onChange}) {
    return (
        <div className="w-full text-neutral bg-panel hover:bg-panel/60 relative rounded-xl focus-within:bg-panel/60 focus-within:outline-2 focus-within:outline-neutral pr-10">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute top-3.5 left-4"/>
            <input 
            type="text" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-transparent p-2.5 pl-2 pr-2 ml-10 mr-8 rounded-xl text-clear focus:border-0 focus:outline-0"
            />
        </div>
    )
}