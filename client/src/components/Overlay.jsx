import React from 'react'
import { useSelector } from 'react-redux'
const Overlay = () => {
    const overlayStatus = useSelector(state=> state.dialog.overlay);

  return (
    <div className={overlayStatus ? 'overlay active' : 'overlay'}></div>
  )
}

export default Overlay