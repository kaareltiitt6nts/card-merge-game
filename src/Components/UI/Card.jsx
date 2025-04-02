import React from 'react'

const Card = (props) => {
  const {children} = props

  return (
    <div className="bg-neutral-200 size-fit relative p-3 rounded-md flex items-center justify-center">
      {children}
    </div>
  )
}

export default Card