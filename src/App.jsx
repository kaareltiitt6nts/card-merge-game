import { useState, useContext, createContext } from 'react'
import './App.css'
import GameContainer from "./Components/GameContainer"
import PlayerDataContext from './Data/PlayerDataContext'

function App() {
  const data = {
    "id":0,
    "key":"asd",
    "name":"",
    "cards":{
      "two":{"heart":0,"diamond":0,"spade":0,"club":0},
      "three":{"heart":0,"diamond":0,"spade":0,"club":0},
      "four":{"heart":0,"diamond":0,"spade":0,"club":0},
      "five":{"heart":0,"diamond":0,"spade":0,"club":0},
      "six":{"heart":0,"diamond":0,"spade":0,"club":0},
      "seven":{"heart":0,"diamond":0,"spade":0,"club":0},
      "eight":{"heart":0,"diamond":0,"spade":0,"club":0},
      "nine":{"heart":0,"diamond":0,"spade":0,"club":0},
      "ten":{"heart":0,"diamond":0,"spade":0,"club":0},
      "jack":{"heart":0,"diamond":0,"spade":0,"club":0},
      "queen":{"heart":0,"diamond":0,"spade":0,"club":0},
      "king":{"heart":0,"diamond":0,"spade":0,"club":0},
      "ace":{"heart":0,"diamond":0,"spade":0,"club":0}
    }
  }

  return (
    <>
      <PlayerDataContext.Provider value={data}>
        <GameContainer/>
      </PlayerDataContext.Provider>
    </>
  )
}

export default App
