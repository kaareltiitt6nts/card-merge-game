import React, { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import Card from './Card'
import cross from "../../assets/cross.png"

const Modal = (props) => {
  const {children, onClose} = props

  const ModalDisplay = ({children}) => {
    return (
      <div className="bg-transparent fixed size-full flex justify-center items-center z-50">
        <div className="fixed inset-0 bg-black/50"></div>
        <Card>
          <button onClick={onClose} className="absolute size-6 right-1 top-1 hover:cursor-pointer"><img src={cross} alt="" /></button>
          <div>
            {children}
          </div>
        </Card>
      </div>
    )
  }

  return (
    createPortal(
      <ModalDisplay children={children}/>,
      document.getElementById("modal-root")
    )
  )
}

export default Modal