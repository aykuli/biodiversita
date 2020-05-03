import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { IconButton } from "@material-ui/core"

import logo from "../../static/imgs/icons/logo.png"
import search from "../../static/imgs/icons/search.svg"
import hexagon from "../../static/imgs/icons/hexagon.svg"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: "#000000",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 1000,
      margin: "0 auto",
    },
    iconButton: {
      padding: 3,
      marginRight: 75,
      "&:last-child": {
        marginRight: 0,
      },
    },
    right: {
      display: "flex",
      alignItems: "center",
    },
  })
)

const Header = () => {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <IconButton
            color="primary"
            aria-label="3Bee"
            component="div"
            className={styles.iconButton}
          >
            <img src={logo} alt="logo" />
          </IconButton>
        </div>
        <div className={styles.right}>
          <IconButton
            color="primary"
            aria-label="search"
            component="div"
            className={styles.iconButton}
          >
            <img src={search} alt="search" />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="hexagon"
            component="div"
            className={styles.iconButton}
          >
            <img src={hexagon} alt="hexagon" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Header
