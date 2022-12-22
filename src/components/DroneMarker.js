import { RegularPolygon } from "react-konva"

const DroneMarker = ({ xPos, yPos }) => {
  return (
    <RegularPolygon
      x={xPos}
      y={yPos}
      sides={6}
      radius={7.5}
      fill="grey"
      strokeWidth={1}
      stroke="white"
    ></RegularPolygon>
  )
}

export default DroneMarker
