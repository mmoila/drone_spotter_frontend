import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import TrackChangesIcon from "@mui/icons-material/TrackChanges"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"

const pages = ["Mapview"]

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TrackChangesIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
            }}
          >
            droneSTALKER
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    component={RouterLink}
                    to="/mapview"
                    textAlign="center"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TrackChangesIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link
            variant="h5"
            noWrap
            component={RouterLink}
            color="inherit"
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
            }}
          >
            droneSTALKER
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={RouterLink}
              color="inherit"
              to={"/mapview"}
              sx={{ my: 2, display: "block" }}
            >
              Mapview
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
