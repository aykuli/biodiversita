import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import {
  makeStyles,
  createStyles,
  ThemeProvider,
} from "@material-ui/core/styles"

import theme from "../themes/theme-light"
// import Navbar from "./Navbar/Navbar"
// import Footer from "./Footer"

const useStyles = makeStyles((/* theme: Theme */) =>
  createStyles({
    root: {},
    content: {},
    main: {
      position: "relative",
      background: "white",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "50px 10px",
    },
  }))

const Layout = ({ children, tabIndex }) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.content}>
          {/* <Navbar activeTab={tabIndex} /> */}
          <main className={classes.main}>{children}</main>
        </div>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  )
}

export default Layout
