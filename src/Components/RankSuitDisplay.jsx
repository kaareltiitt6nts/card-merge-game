import React, { useEffect, useRef, useState, useReducer } from 'react'

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
    <div className={`border-2 min-w-12 p-3 m-3 ${count > 0 ? "bg-white" : "bg-red-200"} rounded-xl transition-transform duration-100 ease-linear ${translateClass}`}>
      <span className="text-2xl">{rank}</span>
      <span className="ml-2 text-xl">{suit}</span>
      <span className="ml-2 text-sm">x{count}</span>
    </div>
  )
}

export default RankSuitDisplay