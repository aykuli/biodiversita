import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import generatingMockImages from "../utils/image-mock-generating"

import Gallery from "./Gallery"

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      maxWidth: 1440,
      margin: "0 auto 85px",
      padding: "40px 0 40px 57px",
    },
    galleryContainer: {
      position: "relative",
      display: "flex",
    },
    title: {
      marginBottom: 60,
    },
    beekeeperDesc: {
      marginBottom: 50,
      textAlign: "left",
    },
    wrapper: {
      display: "flex",
    },
    text: {
      width: 410,
      marginRight: 65,
    },
  })
)

const BeeKeepers = ({
  honeyFullName,
  beekeeperDesc,
  companyDesc,
  beekeepers,
}) => {
  const styles = useStyles()
  // TODO there have to be more complicated logic to save meaning of the sentence.
  const descCropped = beekeeperDesc.slice(0, 50)

  const imageFromQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mock_image.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 580, srcSetBreakpoints: [300, 280], fit: COVER) {
            src
            sizes
            srcSet
            base64
            aspectRatio
            originalName
            srcWebp
          }
        }
      }
    }
  `)
  const images = generatingMockImages(imageFromQuery, 15)
  console.log("imageFromQuery: ", imageFromQuery)

  return (
    <div className={styles.container}>
      <Typography variant="h1" color="primary" className={styles.title}>
        {honeyFullName}
      </Typography>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <Typography variant="h3" className={styles.beekeeperDesc}>
            {descCropped}
          </Typography>
          <Typography variant="body1">{companyDesc}</Typography>
        </div>

        <div className={styles.galleryContainer}>
          <Gallery images={images} />
        </div>
      </div>
    </div>
  )
}

export default memo(BeeKeepers)
