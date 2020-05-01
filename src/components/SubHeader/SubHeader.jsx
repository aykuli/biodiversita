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
      backgroundColor: "transparent",
      border: "none",
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
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const imgNodes = dataQl.allImageSharp.edges

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
          imgNodes.forEach(item => {
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
        <span className="hidden">More honey types</span>
      </button>
    </div>
  )
}

export default SubHeader
