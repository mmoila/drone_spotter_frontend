import { TableContainer, Typography, Paper } from "@mui/material"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

const DroneList = ({ drones }) => {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 5 }}>
      <Typography variant="h3" component={"h1"} m={5} align={"center"}>
        No Drone Zone intrudes
      </Typography>
      <Table size="medium">
        <TableHead>
          <TableRow sx={{ fontWeight: "bold" }}>
            <TableCell align="center">Latest Observation Time</TableCell>
            <TableCell align="center">Serial Number</TableCell>
            <TableCell align="center">Closest Distance To The Nest</TableCell>
            <TableCell align="center">Drone owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drones.map((drone) => (
            <TableRow key={drone.serialNumber}>
              <TableCell align="center">{drone.timeStamp}</TableCell>
              <TableCell align="center">{drone.serialNumber}</TableCell>
              <TableCell align="center">
                {`${(drone.closestDistance / 1000).toFixed(1)} m`}
              </TableCell>
              <TableCell align="center">{drone.owner.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DroneList
