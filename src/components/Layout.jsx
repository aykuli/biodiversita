import React from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    content: {},
    main: {
      position: "relative",
      background: "white",
      margin: "0 auto",
      padding: "50px 10px",
      overflow: "hidden",
    },
  })
)

const Layout = ({ children }) => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <CssBaseline />
      Black Header here <br />
      <div className={styles.content}>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
