import React from "react"
import Img from "gatsby-image"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"

const timingFunc = "cubic-bezier(0.08, 0.03, 0.22, 0.87)"

const useStyles = makeStyles(theme =>
  createStyles({
    images: {
      position: "absolute",
      top: 0,
      left: 0,

      display: "flex",
    },
    imgWrapper: {
      position: "relative",
      width: 332,
      height: 580,
      cursor: "pointer",
      "&:hover, &:focus": {
        "& img": {
          filter: "brightness(0.5)",
          transition: `filter .5s ${timingFunc}`,
        },
      },
    },
    img: {
      width: 332,
      height: 580,
    },
    hoveredImg: {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: 332,
      height: 580,
      padding: 10,
      backgroundColor: "transparent",
      opacity: 0,
      zIndex: 2,
      "&:hover": {
        opacity: 1,
        transition: `opacity .5s ${timingFunc}`,
      },
    },
    name: {
      marginBottom: 25,
      color: theme.palette.text.secondary,
    },
    btn: {
      marginBottom: 50,
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.text.secondary,
      border: `1px solid ${theme.palette.primary.main}`,
      boxSizing: "border-box",
      borderRadius: 20,
    },
    link: {
      border: "none",
      fontWeight: "normal",
      color: theme.palette.text.secondary,
    },
  })
)

const Gallery = ({ images }) => {
  const styles = useStyles()

  const set = new Set()
  while (set.size < images.length) {
    set.add(Math.floor(Math.random() * 1000))
  }
  const uniqKeys = Array.from(set)

  return (
    <div className={styles.images}>
      {images.map((image, index) => {
        return (
          <div className={styles.imgWrapper} key={uniqKeys[index]}>
            <div className={styles.hoveredImg}>
              <Typography variant="h3" className={styles.name}>
                Beekeper name
              </Typography>
              <Button variant="contained" className={styles.btn}>
                Scopri di più
              </Button>
              <Button variant="outlined" className={styles.link}>
                Scegli il suo miele
              </Button>
            </div>
            <Img
              // key={uniqKeys[index]}
              className={styles.img}
              fluid={image.fluid}
              alt={image.fluid.originalName}
              imgStyle={{ width: 332, height: 580 }}
              fadeIn
              loading="eager"
            />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery
