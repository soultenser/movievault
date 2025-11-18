
export default function MultiButton({ onClick, label }) {
    return (
        <button 
            onClick={onClick}
            className="p-1 sm:p-2 rounded-2xl bg-neutral/20 text-clear/80 hover:bg-neutral/40 active:bg-neutral/40 
            sm:active:bg-neutral/10
            active:shadow-none
             shadow-md w-full
             text-sm sm:text-md"
        >
            {label}
        </button>
    );
}