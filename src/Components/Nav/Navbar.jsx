import React, { useReducer, useState } from 'react'
import NavButton from './NavButton'
import HighScore from '../UI/Game/HighScore'
import Modal from '../UI/Modal'

const navReducer = (state, action) => {
  switch (action.type) {
    case "NAV_SHOW_SETTINGS":
      return <HighScore />
    case "NAV_SHOW_HIGHSCORE":
      return <HighScore />
    case "NAV_CLOSE":
      return ""
    default:
      break
  }
}

const Navbar = () => {
  const [navState, navDispatch] = useReducer(navReducer, "")
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div className="w-screen h-16 bg-green-950 flex justify-center gap-5">
      <NavButton icon={"src/assets/trophy.png"} onClick={() => navDispatch({type: "NAV_SHOW_HIGHSCORE"})}/>
      <NavButton icon={"src/assets/gear.png"} onClick={() => navDispatch({type: "NAV_SHOW_SETTINGS"})}/>
      <Modal></Modal>
    </div>
  )
}

export default Navbar