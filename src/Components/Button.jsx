import React from 'react'

const Button = ({children}) => {
  return (
    <button className='border-solid border-2 p-2 m-2 hover:bg-sky-700'>{children}</button>
  )
}

export default Button