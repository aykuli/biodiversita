import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import SubHeader from "./SubHeader"

const useStyles = makeStyles(() =>
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
  })
)

const Layout = ({ children }) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <CssBaseline />
      Black Header here <br />
      <SubHeader />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
