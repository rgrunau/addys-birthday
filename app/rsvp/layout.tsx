export default function Layout({ children } : { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center">
      <main className="w-full max-w-5xl min-h-screen">{children}</main>
    </div>
  );
}