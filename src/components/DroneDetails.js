import { Label, Tag, Text } from "react-konva"

const DroneDetails = ({ drones, showDetailsFor, calculateScaledPosition }) => {
  const drone = drones.find(
    (d) => d.serialNumber === showDetailsFor.serialNumber,
  )
  if (!drone) {
    return null
  }
  const pos = calculateScaledPosition(drone.position)
  return (
    <Label x={pos[0]} y={pos[1] + 10}>
      <Tag fill="white" cornerRadius={2} shadowBlur={2} shadowOffsetY={2} />
      <Text
        text={`Latest observation time: ${drone.timeStamp}\
          \nSerial: ${drone.serialNumber}\
          \nOwner: ${drone.owner.name}\
          \nClosest distance to the nest: ${(
          drone.closestDistance / 1000
        ).toFixed(1)} m`}
        padding={5}
        lineHeight={1.2}
      />
    </Label>
  )
}

export default DroneDetails
