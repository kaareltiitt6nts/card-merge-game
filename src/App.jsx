import { useState, useContext, createContext, useEffect } from "react";
import "./App.css";
import GameContainer from "./Components/GameContainer";
import PlayerDataContext from "./Data/PlayerDataContext";

function App() {
  // selle abil valib, millised v22rtused RankSuitCount'is kuvab
  // kas peaks v2ltima useState() kasutamist??
  const [selectedRank, setSelectedRank] = useState("2");
  //see määrab kui lehele lähed, millest nextrank alustab
  const [showNextRank, setShownextRank] = useState("1");
  //panin usestate'i, et jälgida muutusi ekraanil
  const [data,setData] = useState({
    id: 0,
    key: "asd",
    name: "",
    cards: {
      2: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      3: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      4: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      5: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      6: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      7: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      8: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      9: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      T: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      J: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      Q: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      K: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
      A: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
    },
  })

  //uuendab kaarti seisu
  const updatePlayerData = (updatedCards) => {
    setData({ ...data, cards: updatedCards });
  };
  // const data = {
  //   id: 0,
  //   key: "asd",
  //   name: "",
  //   cards: {
  //     2: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     3: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     4: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     5: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     6: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     7: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     8: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     9: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     T: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     J: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     Q: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     K: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //     A: { "♥": 0, "♦": 0, "♠": 0, "♣": 0 },
  //   },
  // };

  return (
    <>
      <PlayerDataContext.Provider value={{...data, updatePlayerData}} >
        <div className="flex justify-center items-center w-screen h-screen">
        <GameContainer
          selectedRank={selectedRank}
          setSelectedRank={setSelectedRank}
          showNextRank={showNextRank}
          setShownextRank={setShownextRank}
        />
        </div>
      </PlayerDataContext.Provider>
    </>
  );
}

export default App;
