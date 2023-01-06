import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider, CssBaseline } from "@mui/material"
import theme from "./theme"
import { BrowserRouter as Router } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </ThemeProvider>
)
