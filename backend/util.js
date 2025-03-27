import fs from "fs/promises"
import path from "path"
const dataPath = "./backend/data/"

export const readFile = async (filePath) => {
  try {
    const rawData = await fs.readFile(filePath, "utf-8")
    return rawData
  } catch (error) {
    return undefined
  }
}

export const parseRawToJson = async (rawData) => {
  try {
    const parsedData = await JSON.parse(rawData)
    return parsedData
  } catch (error) {
    console.log(error)
  }
}

export const writeFile = async (data, filePath) => {
  try {
    await fs.writeFile(filePath, data, "utf-8")
    return true
  } catch (error) {
    console.log(error)
  }
}

export const savePlayerData = async (key, data) => {
  try {
    const filePath = path.join(dataPath, `${key}.json`)
    const playerDataRaw = await readFile(filePath)

    if (playerDataRaw) {
      const success = await writeFile(JSON.stringify(data), filePath)
    }
    else {
      const file = fs.appendFile(filePath, JSON.stringify(data), (err) => {
        if (err) throw err
      })
    }

    return [true, data]
  } catch (error) {
    console.log(error)
    return [false, undefined]
  }
}

export const parseFile = async (filePath) => {
  try {
    const file = await readFile(filePath)
    const data = await parseRawToJson(file)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const findPlayerData = async (key) => {
  try {
    const playerData = await parseFile(path.join(dataPath, `${key}.json`))

    return playerData
  } catch (error) {
    console.log(error)
  }
}