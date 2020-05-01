import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {},
  })
)

const Gallery = ({ images }) => {
  const styles = useStyles()

  const uniqKeys = images.map(() => Math.floor(Math.random() * 1000))

  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        return <img src={image} alt="" key={uniqKeys[index]} />
      })}
    </div>
  )
}

export default Gallery
