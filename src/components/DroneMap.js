import { Circle, Stage, Layer, Group } from "react-konva"
import { Paper, Container, Box } from "@mui/material"
import { useRef } from "react"
import DroneMarker from "./DroneMarker"

const DroneMap = ({ drones }) => {
  const ndzCircle = useRef()
  const nest = useRef()

  return (
    <Container
      sx={{
        display: "flex",
        marginTop: 10,
        justifyContent: "center",
      }}
    >
      <Box width={500} height={500}>
        <Paper
          variant="outlined"
          width={0.5}
          height={1}
          sx={{ borderColor: "black", backgroundColor: "#white" }}
        >
          <Stage width={500} height={500}>
            <Layer>
              <Group>
                <Circle
                  ref={nest}
                  radius={2.5}
                  fill="black"
                  x={250}
                  y={250}
                ></Circle>
                <Circle
                  ref={ndzCircle}
                  radius={250}
                  x={250}
                  y={250}
                  fill="Red"
                  opacity={0.3}
                  strokeWidth={5}
                  stroke="white"
                ></Circle>
                {drones.map((drone) => {
                  return (
                    <DroneMarker
                      key={drone.serialNumber}
                      xPos={drone.position[0] / 1000}
                      yPos={drone.position[1] / 1000}
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
