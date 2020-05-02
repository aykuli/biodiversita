import React, { memo } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      margin: "20px 40px",
    },
    title: {
      lineHeight: 1,
    },
    quantity: {
      marginBottom: 15,
      color: theme.palette.primary.main,
      fontSize: 60,
      lineHeight: 1,
      fontWeight: "bold",
    },
    desc: {
      marginBottom: 60,
      fontWeight: "normal",
    },
  })
)

const HoneyProperty = ({ title, description }) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h3" className={styles.desc}>
        {description}
      </Typography>
    </div>
  )
}

export default memo(HoneyProperty)
