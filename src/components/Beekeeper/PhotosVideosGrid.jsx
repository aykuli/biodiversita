// grid-template-areas:
// DESKTOP
// video0 video0 img0 video1
// video0 video0 img1 video1
// video0 video0 img1 video2
// img2   img3   img4 video2

// MOBILE
// video0 video0 video0 img0
// video0 video0 video0 img2
// img4   video1 video1 video1
// video2 video1 video1 video1
// img3   img3   img1 img1
import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import "./grid.css"
import { POSTER_FOR_VIDEOS_MOCK } from "../../../static/constantas"

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      maxWidth: 1440,
      margin: "auto",
      padding: "40px 130px 40px",

      "@media (max-width: 1000px)": {
        padding: 0,
      },
    },
    grid: {
      display: "grid",
      gridTemplateAreas: `
        'video0 video0 img0 video1'
        'video0 video0 img1 video1'
        'video0 video0 img1 video2'
        'img2   img3   img4 video2'`,
      gridTemplateRows: "32% 16% 16% 32%",
      gridTemplateColumns: "22% 22% 22% 33%",
      gridGap: 20,
      height: 811,
      marginBottom: 100,
      "@media (max-width: 800px)": {
        gridTemplateAreas: `
          'video0 video0 video0 img0'
          'video0 video0 video0 img2'
          'img4   video1 video1 video1'
          'video2 video1 video1 video1'
          'img3   img3   img1 img1'`,
        gridTemplateRows: "1fr 1fr 1fr 1fr 2fr",
        gridTemplateColumns: "2fr 1fr 1fr 2fr",
      },
    },
  })
)

const videoStyles = [
  {
    width: "100%",
    height: 533,
    objectFit: "cover",
  },
  {
    width: 378,
    height: 388,
  },
  {
    width: 378,
    height: 388,
  },
]
const videoStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
}

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
}

const PhotosVideosGrid = ({ videos, images }) => {
  const styles = useStyles()

  return (
    <div className={styles.grid}>
      {videos.map((video, index) => {
        return (
          <video
            id={`video${index}`}
            key={video}
            src={video}
            poster={POSTER_FOR_VIDEOS_MOCK}
            style={videoStyle}
            controls
          >
            Sorry, your browser doesn't support embedded videos, but don't
            worry, you can <a href={video}>download it</a>
            and watch it with your favorite video player!
          </video>
        )
      })}
      {images.map((img, index) => (
        <img
          id={`img${index}`}
          src={img}
          key={img}
          alt="3Bee"
          sizes="(max-width: 245px) 100vw, 245"
          style={imgStyle}
        />
      ))}
    </div>
  )
}

export default PhotosVideosGrid
