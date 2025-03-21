import express from "express"
import { parseFile, writeFile } from "../util.js"
const dataPath = "./backend/data/players.json"

const apiRouter = express.Router()

apiRouter.get("/get-player-data/", async (req, res) => {
  try {
    const {key} = req.query

    const allPlayerData = await parseFile(dataPath)
    const playerData = allPlayerData.find(player => player.key === key)

    if (playerData) {
      res.status(200).json(playerData)
    }
    else {
      res.status(404).json({message: "Player data not found"})
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error"})
  }
})

apiRouter.post("/save-player-data/", async (req, res) => {
  try {
    const {key, ...data} = req.body

    const allPlayerData = await parseFile(dataPath)
    const playerData = allPlayerData.find(player => player.key === key)
    
    if (!playerData) { // kui pole olemas siis lisa
      playerData = data
      const success = await writeFile(data, dataPath);
      if (success) {
        res.status(201).json({ data });
      } else {
        res.status(500).json({ message: "Failed to write data" });
      }
    } else { // kui on siis uuenda
      playerData = data
      const success = await writeFile(data, dataPath)
      if (success) {
        res.status(201).json({ data });
      } else {
        res.status(500).json({ message: "Failed to write data" });
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error"})
  }
})

export default apiRouter