import { Circle, Stage, Layer, Group, Text } from "react-konva"
import { Paper, Container, Box } from "@mui/material"
import { useRef } from "react"
import DroneMarker from "./DroneMarker"

const DroneMap = ({ drones }) => {
  const ndzCircle = useRef()
  const nest = useRef()
  const wholeWidth = 500
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

  return (
    <Container
      sx={{
        display: "flex",
        marginTop: 10,
        justifyContent: "center",
      }}
    >
      <Box width={wholeWidth} height={wholeWidth}>
        <Paper
          variant="outlined"
          width={1}
          height={1}
          sx={{ borderColor: "black", backgroundColor: "#white" }}
        >
          <Stage width={wholeWidth} height={wholeWidth}>
            <Layer>
              <Group>
                <Circle
                  ref={nest}
                  radius={2.5}
                  fill="black"
                  x={wholeWidth / 2}
                  y={wholeWidth / 2}
                />
                <Text
                  x={wholeWidth / 9}
                  y={wholeWidth / 8}
                  rotation={-40}
                  text="NDZ"
                  fontSize={22}
                  fontStyle="bold"
                />
                <Circle
                  ref={ndzCircle}
                  radius={100 * scaleMultiplier}
                  x={wholeWidth / 2}
                  y={wholeWidth / 2}
                  fill="Red"
                  opacity={0.3}
                  strokeWidth={5}
                  stroke="white"
                ></Circle>
                {drones.map((drone) => {
                  const pos = calculateScaledPosition(drone.position)

                  return (
                    <DroneMarker
                      key={drone.serialNumber}
                      xPos={pos[0]}
                      yPos={pos[1]}
                    />
                  )
                })}
              </Group>
            </Layer>
          </Stage>
        </Paper>
      </Box>
    </Container>
  )
}

export default DroneMap
