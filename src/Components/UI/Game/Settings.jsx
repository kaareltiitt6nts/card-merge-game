import React, { useContext } from 'react'
import PlayerDataContext from '../../../Data/PlayerDataContext'
import Button from '../Button'

const Settings = () => {
  const {playerData} = useContext(PlayerDataContext)

  const handleSave = async (key, name) => {
    try {
      const response = await fetch("/api/save-player-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key: key,
          playerData: {...playerData, name: name ?? playerData.name}
        })
      })

      if (response.status === 201) {
        localStorage.setItem("playerKey", key)
        alert("Data saved successfully!")
        location.reload()
      }
      else {
        alert("Failed to save data.")
      }
    } catch (error) {
      alert("Failed to save data.")
    }
  }

  const handleLoad = async (key) => {
    try {
      const response = await fetch(`/api/get-player-data?key=${key}`)

      if (response.status === 200) {
        localStorage.setItem("playerKey", key)
        alert("Data loaded successfully!")
        location.reload()
      }
      else if (response.status === 404) {
        console.log(response.status)
        alert("Failed to find data.")
      }
      else {
        console.log(response.status)
        alert("Failed to load data.")
      }
    } catch (error) {
      console.log(error)
      alert("Failed to load data.")
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const eventType = event.nativeEvent.submitter.name
    const formData = new FormData(event.target)

    const key = formData.get("key")
    const name = formData.get("name")

    if (eventType === "save") {
      handleSave(key, name)
    }
    else {
      handleLoad(key)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="key"className="mb-1">Key</label>
          <input type="text" name="key" id="key" className="bg-neutral-300 p-2 border rounded-sm"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">Name</label>
          <input type="text" name="name" id="name" className="bg-neutral-300 p-2 border rounded-sm"/>
        </div>
        <div className="flex justify-around">
          <input type="submit" value="Save" name="save" className="bg-green-300 p-2 rounded-sm border hover:cursor-pointer hover:brightness-105 active:brightness-95"/>
          <input type="submit" value="Load" name="load" className="bg-yellow-300 p-2 rounded-sm border hover:cursor-pointer hover:brightness-105 active:brightness-95"/>
        </div>
      </form>
    </div>
  )
}

export default Settings