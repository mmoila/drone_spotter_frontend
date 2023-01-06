import { Circle, Stage, Layer, Group, Text } from "react-konva"
import { Typography, Container, Box } from "@mui/material"
import { useRef, useState } from "react"
import DroneMarker from "./DroneMarker"
import DroneDetails from "./DroneDetails"

const DroneMap = ({ drones }) => {
  const ndzCircle = useRef()
  const nest = useRef()
  const [showDetailsFor, setShowDetailsFor] = useState(null)
  const wholeWidth = 1000
  const circleDiameter = 500
  const scaleMultiplier = 2.5

  const calculateScaledPosition = (originalPos) => {
    const nestCoordinates = [250, 250]
    const orgXFromNest = originalPos[0] / 1000 - nestCoordinates[0]
    const orgYFromNest = originalPos[1] / 1000 - nestCoordinates[1]
    const newXFromNest = orgXFromNest * scaleMultiplier
    const newYFromNest = orgYFromNest * scaleMultiplier

    return [
      nestCoordinates[0] + newXFromNest,
      nestCoordinates[1] + newYFromNest,
    ]
  }

  const renderDrone = (drone) => {
    const pos = calculateScaledPosition(drone.position)

    return (
      <DroneMarker
        key={drone.serialNumber}
        name={drone.serialNumber}
        xPos={pos[0]}
        yPos={pos[1]}
        setShowDetailsFor={() =>
          !showDetailsFor || showDetailsFor.serialNumber !== drone.serialNumber
            ? setShowDetailsFor(drone)
            : setShowDetailsFor(null)
        }
      />
    )
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component={"h1"}
        m={5}
        align={"center"}
        color="white"
      >
        Latest Observations of Intruders
      </Typography>
      <Box display={"flex"} width={wholeWidth} height={wholeWidth}>
        <Stage
          x={(wholeWidth - circleDiameter) / 2}
          y={5}
          width={wholeWidth}
          height={wholeWidth}
        >
          <Layer>
            <Group>
              <Text
                x={circleDiameter / 9}
                y={circleDiameter / 9}
                rotation={-40}
                text="NDZ"
                fontSize={22}
                fontStyle="bold"
                fill="white"
              />
              <Circle
                ref={ndzCircle}
                radius={100 * scaleMultiplier}
                x={circleDiameter / 2}
                y={circleDiameter / 2}
                fill="#E8C845"
                strokeWidth={5}
                stroke="black"
              />
              <Circle
                ref={nest}
                radius={2.5}
                fill="black"
                x={circleDiameter / 2}
                y={circleDiameter / 2}
              />
              {drones.map((drone) => {
                return renderDrone(drone)
              })}
              {showDetailsFor ? (
                <DroneDetails
                  drones={drones}
                  showDetailsFor={showDetailsFor}
                  calculateScaledPosition={calculateScaledPosition}
                />
              ) : null}
            </Group>
          </Layer>
        </Stage>
      </Box>
    </Container>
  )
}

export default DroneMap
