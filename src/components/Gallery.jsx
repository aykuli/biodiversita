import React from "react"
import Img from "gatsby-image"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    // container: {
    //   position: "relative",
    //   display: "flex",
    //   width: "100%",

    //   overflow: "hidden",
    // },
    images: {
      position: "absolute",
      top: 0,
      left: 0,

      display: "flex",
    },
    img: {
      width: 332,
      height: 580,
    },
  })
)

const Gallery = ({ images }) => {
  console.log("Gallery")
  const styles = useStyles()

  const set = new Set()
  while (set.size < images.length) {
    set.add(Math.floor(Math.random() * 1000))
  }
  const uniqKeys = Array.from(set)
  console.log("uniqKeys: ", uniqKeys)

  return (
    <div className={styles.images}>
      {images.map((image, index) => {
        console.log("image: ", image)
        return (
          <Img
            key={uniqKeys[index]}
            className={styles.img}
            fluid={image.fluid}
            alt={image.fluid.originalName}
            imgStyle={{ width: 332, height: 580 }}
            fadeIn
            loading="eager"
          />
        )
      })}
    </div>
  )
}

export default Gallery
