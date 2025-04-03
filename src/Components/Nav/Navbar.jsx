import React, { useEffect, useReducer, useState } from 'react'
import NavButton from './NavButton'
import HighScore from '../UI/Game/HighScore'
import Modal from '../UI/Modal'
import Settings from '../UI/Game/Settings'

const modalStates = {
  MODAL_SETTINGS: "MODAL_SETTINGS",
  MODAL_HIGHSCORE: "MODAL_HIGHSCORE",
  MODAL_NONE: "MODAL_NONE"
}

const Navbar = () => {
  const [modal, setModal] = useState(null)

  return (
    <div className="sticky w-screen h-16 bg-green-950 flex justify-center gap-5">
      <NavButton icon={"src/assets/trophy.png"} onClick={() => setModal(modalStates.MODAL_HIGHSCORE)}/>
      <NavButton icon={"src/assets/gear.png"} onClick={() => setModal(modalStates.MODAL_SETTINGS)}/>

      {modal === modalStates.MODAL_HIGHSCORE && <Modal onClose={() => setModal(modalStates.MODAL_NONE)}><HighScore/></Modal>}
      {modal === modalStates.MODAL_SETTINGS && <Modal onClose={() => setModal(modalStates.MODAL_NONE)}><Settings/></Modal>}
    </div>
  )
}

export default Navbar