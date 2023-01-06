import { TableContainer, Typography, Paper } from "@mui/material"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

const DroneList = ({ drones }) => {
  const formatTime = (timeString) => {
    const time = new Date(timeString)
    return time.toUTCString().slice(0, -7)
  }
  if (!drones) {
    return
  }
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 5,
        paddingBottom: 10,
        borderWidth: 2,
      }}
      elevation={20}
      variant="outlined"
    >
      <Typography variant="h3" component={"h1"} m={5} align={"center"}>
        No Drone Zone intrudes
      </Typography>
      <Table>
        <TableHead>
          <TableRow sx={{ fontWeight: "bold" }}>
            <TableCell align="center">Latest Observation Time (UTC)</TableCell>
            <TableCell align="center">Serial Number</TableCell>
            <TableCell align="center">Closest Distance To The Nest</TableCell>
            <TableCell align="center">Drone owner</TableCell>
            <TableCell align="center">Owner email</TableCell>
            <TableCell align="center">Owner phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drones.map((drone) => (
            <TableRow key={drone.serialNumber}>
              <TableCell align="center">
                {formatTime(drone.timeStamp)}
              </TableCell>
              <TableCell align="center">{drone.serialNumber}</TableCell>
              <TableCell align="center">
                {`${(drone.closestDistance / 1000).toFixed(1)} m`}
              </TableCell>
              <TableCell align="center">{drone.owner.name}</TableCell>
              <TableCell align="center">{drone.owner.email}</TableCell>
              <TableCell align="center">{drone.owner.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DroneList
