import React, { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = (props) => {
  const {children} = props
  const [isVisible, setIsVisible] = useState(false)
  const modal = useRef()

  useEffect(() => {
    modal.current.showModal()
  }, [isVisible])

  const ModalDisplay = () => {
    return(
      <dialog>
        <p>Hi!</p>
      </dialog>
    )
  }

  return (
    createPortal(
      <ModalDisplay></ModalDisplay>,
      document.getElementById("modal-root")
    )
  )
}

export default Modal