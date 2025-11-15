
export default function FlexContainer(children) {

    return (
        <div className="flex gap-4 rounded-xl bg-panel">
            { children }
        </div>
    );
}