import React, { useContext } from 'react'
import PlayerDataContext from '../../../Data/PlayerDataContext'

const Settings = () => {
  const {playerData} = useContext(PlayerDataContext)

  return (
    <div>
      {playerData.name}
    </div>
  )
}

export default Settings