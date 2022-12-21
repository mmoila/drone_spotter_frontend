import { useState, useEffect, useRef } from "react"
import DroneList from "./components/DroneList"

function App() {
  const [drones, setDrones] = useState([])
  const ws = useRef(null)

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001")
    ws.current = socket

    ws.current.onopen = () => {
      console.log("opened")
    }

    ws.current.onclose = () => {
      console.log("closed")
    }

    ws.current.onmessage = (event) => {
      console.log("message received")
      setDrones(JSON.parse(event.data))
    }

    return () => {
      socket.close()
    }
  }, [])

  return (
    <div className="App">
      <DroneList drones={drones} />
    </div>
  )
}

export default App
