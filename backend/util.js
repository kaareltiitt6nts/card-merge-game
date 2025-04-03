import fs from "fs/promises"
import path from "path"
const dataPath = "./backend/data/"

export const fileExists = async (filePath) => {
  try {
    await fs.access(filePath)
    return true
  } catch (error) {
    return false
  }
}

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

    const json = JSON.stringify(data)
    const success = await writeFile(json, filePath)

    return success
  } catch (error) {
    console.log(error)
    return false
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
    const filePath = path.join(dataPath, `${key}.json`)
    const dataExists = await fileExists(filePath)
    if (dataExists === false) return undefined 

    const playerData = await parseFile(filePath)

    return playerData
  } catch (error) {
    console.log(error)
  }
}