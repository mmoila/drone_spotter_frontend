import { useState, useEffect, useRef } from "react"
import NavBar from "./components/NavBar"
import DroneList from "./components/DroneList"
import Container from "@mui/material/Container"
import { Routes, Route } from "react-router-dom"
import DroneMap from "./components/DroneMap"

function App() {
  const [drones, setDrones] = useState([])
  const wss = useRef(null)

  useEffect(() => {
    let url
    if (process.env.REACT_APP_ENV === "dev") {
      url = "ws://localhost:3001"
    } else {
      // eslint-disable-next-line no-restricted-globals
      url = new URL("/", location.href)
      url.protocol = url.protocol === "https:" ? "wss" : "ws"
    }

    const socket = new WebSocket(url)
    wss.current = socket

    wss.current.onopen = () => {
      console.log("opened")
    }

    wss.current.onclose = () => {
      console.log("closed")
    }

    wss.current.onmessage = (event) => {
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
          <Route path="/mapview" element={<DroneMap drones={drones} />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
