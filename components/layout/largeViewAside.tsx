import AppNav from "./appNav";


export default function LargeViewAside() { 

  return (
    <aside className="w-full lg:w-1/4 xl:w-1/5 bg-indigo-400 lg:min-h-screen">
      <AppNav />
    </aside>
  )
}