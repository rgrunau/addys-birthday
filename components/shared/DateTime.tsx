'use client'

import { useMemo } from "react"

interface DateTimeComponentProps { 
  date: Date | undefined
}

const DateTimeComponent = ({ date }: DateTimeComponentProps) => { 
  
  if (!date) return null
  const convertDate = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toDateString()
  }, [date])

  return (
    <div className="text-lg text-slate-700 py-2">{convertDate}</div>
  )
}

export default DateTimeComponent