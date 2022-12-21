import { useState, useEffect, useRef } from "react"
import NavBar from "./components/NavBar"
import DroneList from "./components/DroneList"
import Container from "@mui/material/Container"
import { Routes, Route } from "react-router-dom"

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
    <>
      <NavBar />
      <Container className="App">
        <Routes>
          <Route path="/" element={<DroneList drones={drones} />} />
          <Route path="/mapview" element={<div>Map here!</div>} />
        </Routes>
      </Container>
    </>
  )
}

export default App
