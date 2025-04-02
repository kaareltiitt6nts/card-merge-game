import React from 'react'

const RankButton = (props) => {
  const {children, onClick, selected} = props
  const selectedStyle = "size-16 rounded-b-sm bg-green-100"
  const normalStyle = "bg-white hover:size-14 hover:rounded-b-sm"

  return (
    <button
      className={`size-12 transition-[width height rounded-b] duration-50 ${selected === true ? selectedStyle : normalStyle} hover:cursor-pointer`} 
      onClick={() => onClick()}
    >
      {children}
    </button>
  )
}

export default RankButton