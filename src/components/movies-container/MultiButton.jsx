
export default function MultiButton({ onClick, label }) {
    return (
        <button 
            onClick={onClick}
            className="p-2 rounded-2xl bg-neutral/10 text-clear/80 hover:bg-neutral/50 active:bg-neutral/50 shadow-md w-full"
        >
            {label}
        </button>
    );
}