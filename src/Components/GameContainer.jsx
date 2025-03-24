import React, { useContext, useState } from 'react'
import PlayerDataContext from '../Data/PlayerDataContext'
import RankArea from './RankArea'
import RankSuitCount from './RankSuitCount'
import MergeGet from './MergeGet'

function GameContainer({selectedRank, setSelectedRank, showNextRank, setShownextRank}) {
  const playerData = useContext(PlayerDataContext)
  const ranks = Object.keys(playerData.cards);
  
  return (
    <div>
        <RankArea setSelectedRank={setSelectedRank} setShownextRank={setShownextRank} />
        <RankSuitCount selectedRank={selectedRank} />
        <MergeGet></MergeGet>
        <RankSuitCount selectedRank={ranks[showNextRank]} />
        
    </div> 
  )
}

export default GameContainer