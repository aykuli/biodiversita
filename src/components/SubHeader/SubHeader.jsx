import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import { HONEY_TYPES } from "../../../static/constantas"

import HoneyType from "./HoneyType"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: theme.palette.background.secondary,
    },
    honeyList: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: 1140,
      width: "100%",
      height: 120,
      margin: 0,
      padding: 0,

      listStyle: "none",
      "& li": {
        width: "100%",
      },
    },
    next: {
      width: 50,
      padding: 5,
      backgroundColor: "transparent",
      backgroundImage: `url(${require("./assets/arrow.svg")})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top 50% left 50%",
      border: "none",
      cursor: "pointer",
    },
    hidden: {
      display: "none",
    },
  })
)

const SubHeader = ({ currentHoney, handleHoney }) => {
  const styles = useStyles()

  const dataQl = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(fit: CONTAIN) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const imgNodes = dataQl.allImageSharp.edges

  // filtering needed images for SubHeader
  const images = []
  imgNodes.forEach(el => {
    const honeyType = el.node.fluid.originalName.slice(0, -4)
    let isExist = false
    HONEY_TYPES.forEach(({ honey }) => {
      if (honey === honeyType) {
        isExist = true
      }
    })
    if (isExist) {
      images.push(el)
    }
  })

  return (
    <div className={styles.container}>
      <ul className={styles.honeyList}>
        {HONEY_TYPES.map(({ honey, isNew }) => {
          const isCurrent = honey === currentHoney
          let imgNode

          images.forEach(item => {
            if (item.node.fluid.originalName === `${honey}.png`) {
              imgNode = item.node
            }
          })

          return (
            <li key={honey}>
              <HoneyType
                honey={honey}
                handleHoney={handleHoney}
                isCurrent={isCurrent}
                isNew={isNew}
                imgData={imgNode}
              />
            </li>
          )
        })}
      </ul>
      <button className={styles.next}>
        <span className={styles.hidden}>More honey types</span>
      </button>
    </div>
  )
}

export default memo(SubHeader)
