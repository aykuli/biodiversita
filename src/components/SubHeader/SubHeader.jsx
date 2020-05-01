import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import { HONEY_TYPES, MAIN_API, BEEKEPERS } from "../../../static/constantas"

import HoneyType from "./HoneyType"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F8F8F9",
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

const SubHeader = () => {
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
  console.log(imgNodes)

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

  const [currentHoney, setCurrentHoney] = useState(HONEY_TYPES[0].honey)

  const handleHoney = honey => {
    setCurrentHoney(honey)
  }

  const beekeepersFetching = async honey => {
    const url = `${MAIN_API}${BEEKEPERS}?honey=${honey}`
    const res = await fetch(url)
    const data = await res.json()
    console.log("data: ", data)
  }

  useEffect(() => {
    beekeepersFetching(currentHoney)
  }, [currentHoney])

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
          console.log("imgNode: ", imgNode)

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

export default SubHeader
