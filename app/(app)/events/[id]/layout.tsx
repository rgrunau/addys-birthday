

export default function IndivualEvent({ children }: Readonly<{ children: React.ReactNode }>) { 


  return (
    <div className="w-full h-3/4 bg-white text-slate-900 flex flex-col rounded-lg shadow-sm">
      {children}
    </div>
  )
}