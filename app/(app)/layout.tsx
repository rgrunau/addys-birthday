
export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center lg:flex-row xl:justify-between xl:items-start xl:p-12">
      {children}
    </div>
  );
}