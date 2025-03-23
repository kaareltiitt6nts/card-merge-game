import React, { useContext } from 'react'
import Button from "./Button"
import PlayerDataContext from '../Data/PlayerDataContext'
import RankArea from './RankArea'
import RankSuitCount from './RankSuitCount'
import MergeGet from './MergeGet'

function GameContainer({selectedRank, setSelectedRank}) {
  const playerData = useContext(PlayerDataContext)
  return (
    <div>
        <RankArea setSelectedRank={setSelectedRank} />
        <RankSuitCount selectedRank={selectedRank} />
        <MergeGet></MergeGet>
        <RankSuitCount selectedRank={selectedRank} />
        
    </div> 
  )
}

export default GameContainer