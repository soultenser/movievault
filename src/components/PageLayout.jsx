

export default function PageLayout({ children, detailOpen, detailContent }) {

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[1fr_400px] gap-4 z-10 h-full">
      <main className="bg-primary  rounded-2xl min-h-screen">{children}</main>

      {/* Desktop sidebar */}
      {
        detailOpen && (
        <aside className="hidden lg:block bg-panel p-6 rounded-2xl">
            {detailContent}
        </aside>
        )
      }

      {/* Tablet overlay */}
      {detailOpen && (
        <div className="hidden md:block lg:hidden fixed inset-0 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-primary p-6 shadow-xl mt-25">
            {detailContent}
          </div>
        </div>
      )}

      {/* Mobile fullscreen */}
      {detailOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-primary p-6 overflow-y-auto h-auto mb-21">
                {detailContent}
        </div>
      )}
    </div>
  );
}