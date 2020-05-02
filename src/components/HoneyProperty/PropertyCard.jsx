import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography, Card, CardMedia, CardHeader } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.secondary,
    },
    title: {
      lineHeight: 1,
    },
    desc: {
      marginBottom: 60,
      fontWeight: "normal",
    },
  })
)

const PropertyCard = ({ title, description }) => {
  const styles = useStyles()

  return (
    <Card className={styles.container}>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
      <CardMedia
        className={styles.media}
        image="../../../static/images/honey-property-bgs/honey.jpg"
        title="Paella dish"
      />
    </Card>
  )
}

export default PropertyCard
