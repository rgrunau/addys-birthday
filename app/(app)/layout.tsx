import LargeViewAside from "@/components/layout/largeViewAside";
import { inter } from "@/constants/fonts";


export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${inter.className} w-full min-h-screen flex flex-col justify-center items-center lg:flex-row xl:justify-between xl:items-start`}>
      <LargeViewAside />
      <section className="w-full lg:w-3/4 xl:w-4/5 p-3 bg-slate-100">
        {children}
      </section>
    </div>
  );
}