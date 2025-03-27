import express from "express"
import { findPlayerData, savePlayerData } from "../util.js"

const apiRouter = express.Router()

apiRouter.get("/get-player-data/", async (req, res) => {
  try {
    const {key} = req.body

    const playerData = await findPlayerData(key)

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
    const {key, data} = req.body

    const [success, playerData] = await savePlayerData(key, data)

    if (success) {
      res.status(201).json(playerData)
    }
    else {
      res.status(500).json({message: "Internal server error"})
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error"})
  }
})

export default apiRouter