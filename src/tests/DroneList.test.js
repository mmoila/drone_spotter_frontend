import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import DroneList from "../components/DroneList"

const formatTime = (timeString) => {
  const time = new Date(timeString)
  return time.toUTCString().slice(0, -7)
}

describe("When dronelist is rendered", () => {
  test("header is rendered correctly", () => {
    render(<DroneList drones={[]} />)
    const element = screen.getByText("No Drone Zone intrudes")
    expect(element).toBeDefined()
  })

  test("drone and user data is rendered correctly", () => {
    const drone = {
      timeStamp: "2023-01-09T11:59:45.107+00:00",
      serialNumber: "SN-5UHgScVTbc",
      closestDistance: 86499.58010244428,
      position: [316734.73581724457, 305033.19355899445],
      owner: {
        name: "Cheyenne Williamson",
        phoneNumber: "+210907080045",
        email: "cheyenne.williamson@example.com",
      },
      expireAt: "2023-01-09T12:09:45.107+00:00",
    }

    render(<DroneList drones={[drone]} />)

    expect(screen.getByText(formatTime(drone.timeStamp))).toBeDefined()
    expect(screen.getByText(drone.serialNumber)).toBeDefined()
    expect(
      screen.getByText(`${(drone.closestDistance / 1000).toFixed(1)} m`)
    ).toBeDefined()
    expect(screen.getByText(drone.owner.name)).toBeDefined()
    expect(screen.getByText(drone.owner.email)).toBeDefined()
    expect(screen.getByText(drone.owner.phoneNumber)).toBeDefined()
  })
})
