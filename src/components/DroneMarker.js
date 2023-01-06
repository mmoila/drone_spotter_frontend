import { RegularPolygon } from "react-konva"

const DroneMarker = ({ xPos, yPos, setShowDetailsFor }) => {
  return (
    <RegularPolygon
      x={xPos}
      y={yPos}
      sides={6}
      radius={7.5}
      fill="grey"
      strokeWidth={1}
      stroke="black"
      onClick={setShowDetailsFor}
      onTouchEnd={setShowDetailsFor}
    />
  )
}

export default DroneMarker
