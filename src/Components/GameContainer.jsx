import React, { useContext } from 'react'
import Button from "./Button"
import PlayerDataContext from '../Data/PlayerDataContext'
import RankArea from './RankArea'

function GameContainer() {
  const playerData = useContext(PlayerDataContext)
  return (
    <div>
        <RankArea />
        <Button></Button>
        {playerData.toString()}
    </div> 
  )
}

export default GameContainer