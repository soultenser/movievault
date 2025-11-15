
export default function FlexContainer({children}) {

    return (
        <div className="flex shadow-none items-center justify-center rounded-2xl md:min-w-2xl xl:w-4/5 bg-primary
         md:bg-panel/60 md:shadow-md p-4">
            <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-y-4 sm:gap-6 md:gap-8 lg:gap-4 xl:gap-6 
            w-full md:max-w-300 md:min-w-md">
                { children }
            </div>
        </div>
    );
}