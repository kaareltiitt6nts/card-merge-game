import React from 'react'

const NavButton = (props) => {
  const {icon, onClick} = props

  return (
    <button onClick={() => onClick()}>
      <img src={icon} alt="" className='h-12 aspect-square hover:cursor-pointer hover:scale-105'/>
    </button>
  )
}

export default NavButton