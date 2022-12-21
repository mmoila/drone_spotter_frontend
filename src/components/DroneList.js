import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

const DroneList = ({ drones }) => {
  return (
    <div>
      <h2>No Drone Zone intrudes for the past 10 minutes</h2>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ fontWeight: "bold" }}>
            <TableCell>Date and time</TableCell>
            <TableCell>Serial Number</TableCell>
            <TableCell>Closest distance to the nest</TableCell>
            <TableCell>Drone owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drones.map((drone) => (
            <TableRow key={drone.serialNumber}>
              <TableCell>{drone.timeStamp}</TableCell>
              <TableCell>{drone.serialNumber}</TableCell>
              <TableCell align="center">
                {`${(drone.closestDistance / 1000).toFixed(1)} m`}
              </TableCell>
              <TableCell>{drone.owner.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DroneList
