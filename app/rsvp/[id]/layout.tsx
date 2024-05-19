
export default function RSVPLayout({ children } : { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center text-slate-900">
      <section className="w-full max-w-5xl min-h-screen">{children}</section>
    </div>
  );
}