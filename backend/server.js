import express from "express"
import apiRouter from "./router/api.js"

const app = express()
const PORT = 5174

app.use(express.json())
app.use("/api", apiRouter)

app.listen(PORT, () => {
  console.log(`server is running on port 5173`)
})