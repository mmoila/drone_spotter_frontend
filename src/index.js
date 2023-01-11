import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App"
import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>
)
