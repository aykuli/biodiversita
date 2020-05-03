import React, { useState } from "react"
import Img from "gatsby-image"
import Slider from "infinite-react-carousel"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography, Button } from "@material-ui/core"

const timingFunc = "cubic-bezier(0.08, 0.03, 0.22, 0.87)"

const useStyles = makeStyles(theme =>
  createStyles({
    images: {
      position: "absolute",
      top: 0,
      left: 0,

      width: "100%",
      "& .carousel-arrow": {
        display: "none",
      },
    },
    imgWrapper: {
      position: "relative",
      width: 332,
      height: 580,
      cursor: "pointer",
      "&:hover img, &:focus img": {
        outline: "1px solid red",
        filter: "brightness(0.5)",
        transition: `filter .5s ${timingFunc}`,
      },

      "@media (max-width: 1200px)": {
        width: 284,
        height: 496,
      },
      "@media (max-width: 600px)": {
        width: "100%",
      },
    },
    img: {
      width: 332,
      height: 580,
      "@media (max-width: 1200px)": {
        width: 284,
        height: 496,
        filter: "brightness(0.5)",
      },
      "@media (max-width: 600px)": {
        width: "100%",
        height: "100%",
      },
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
      "&:hover, &:focus": {
        opacity: 1,
        transition: `opacity .5s ${timingFunc}`,
      },
      "@media (max-width: 1200px)": {
        opacity: 1,
        width: 284,
        height: 496,
        zIndex: 2,
      },
      "@media (max-width: 600px)": {
        width: "100%",
        zIndex: 2,
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

// if we take images from API, we can take it from beekepers array,
// if from the local folder - ffrom prepared images array grom GraphQL

const Gallery = ({ images, beekeepers, handleBeekeeper }) => {
  const styles = useStyles()

  const bodyWidth = document.body.clientWidth
  let imgStyles
  if (bodyWidth <= 1000 && bodyWidth >= 600) {
    imgStyles = { width: 284, height: 496 }
  } else if (bodyWidth < 600) {
    imgStyles = { width: "100%", height: "100%" }
  }

  const [galleryWidth, setGalleryWidth] = useState("100%")
  const [slidesToShowCount, setSlidesToShowCount] = useState(2)

  const set = new Set()
  while (set.size < images.length) {
    set.add(Math.floor(Math.random() * 1000))
  }
  const uniqKeys = Array.from(set)

  setTimeout(() => {
    const galleryContainer = document.body.querySelector("#gallery-container")

    const newGalleryWidth = bodyWidth - galleryContainer.offsetLeft
    setSlidesToShowCount(bodyWidth > 600 ? 2 : 1)

    setGalleryWidth(newGalleryWidth)
  }, 500)

  const sliderSettings = {
    slidesToShow: slidesToShowCount,
    wheel: true,
  }

  return (
    <div className={styles.images} style={{ width: galleryWidth }}>
      <Slider {...sliderSettings}>
        {images.map((image, index) => {
          const currenBeekeeper = beekeepers[index]
          return (
            <div className={styles.imgWrapper} key={uniqKeys[index]}>
              <div className={styles.hoveredImg}>
                <Typography variant="h3" className={styles.name}>
                  {currenBeekeeper.fullname}
                </Typography>
                <Button
                  variant="contained"
                  className={styles.btn}
                  onClick={() => handleBeekeeper(currenBeekeeper.id)}
                >
                  Scopri di più
                </Button>
                <Button
                  variant="outlined"
                  className={styles.link}
                  onClick={() => handleBeekeeper(currenBeekeeper.id)}
                >
                  Scegli il suo miele
                </Button>
              </div>
              <Img
                className={styles.img}
                fluid={image.fluid}
                alt={image.fluid.originalName}
                imgStyle={imgStyles}
                fadeIn
                loading="eager"
              />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default Gallery
