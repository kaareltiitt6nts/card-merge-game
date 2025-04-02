import React, { useEffect, useRef, useState } from 'react'

const RankSuitDisplay = (props) => {
  const {rank, suit, count} = props
  const [translateClass, setTranslateClass] = useState("")
  const lastCount = useRef(count)
  const lastRank = useRef(rank)

  useEffect(() => {
    if (rank !== lastRank.current) {
      lastRank.current = rank
      lastCount.current = count
      return
    }

    if (count > lastCount.current) {
      setTranslateClass("-translate-y-3")
    }
    else if (count < lastCount.current) {
      setTranslateClass("translate-y-3")
    }
    else {
      return
    }

    lastCount.current = count

    const timeout = setTimeout(() => {
      setTranslateClass("")
    }, 50);

    return () => clearTimeout(timeout)
  }, [count])

  return (
    <div className={`w-32 h-12 flex flex-row justify-center items-center ${count > 0 ? "bg-white" : "bg-red-200"} rounded-md transition-transform duration-100 ease-linear ${translateClass}`}>
      <div>
        <span className="text-2xl">{rank}</span>
        <span className="ml-2 text-xl">{suit}</span>
        <span className="ml-2 text-sm self-end">x{count}</span>
      </div>
    </div>
  )
}

export default RankSuitDisplay