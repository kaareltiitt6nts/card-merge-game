import fs from "fs/promises"
import { parse } from "path"

export const readFile = async (filePath) => {
  try {
    const rawData = await fs.readFile(filePath, "utf-8")
    return rawData
  } catch (error) {
    console.log(error)
    return undefined
  }
}

export const parseRawToJson = async (rawData) => {
  try {
    const parsedData = await JSON.parse(rawData)
    return parsedData
  } catch (error) {
    console.log(error)
    return undefined
  }
}

export const writeFile = async (data, filePath) => {
  try {
    await fs.writeFile(filePath, data, "utf-8")
    return true
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
    return undefined
  }
}

export const getPlayerByKey = async (playerKey) => {
  try {
    
  } catch (error) {
    console.log(error)
    return undefined
  }
}