import React, { useState, useEffect } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import { HONEY_TYPES, MAIN_API, BEEKEPERS } from "../../static/constantas"

const useStyles = makeStyles(theme =>
  createStyles({
    honeyList: {
      display: "inline-flex",

      backgroundColor: "#F8F8F9",
      listStyle: "none",
    },
    item: {
      fontSize: 12,
    },
    honeyName: {
      fontSize: 12,
    },
    isNewHoney: {
      fontSize: 10,
      color: "#D30F0F",
    },
    currentHoney: {
      fontSize: 12,
      color: theme.palette.primary.main,
    },
  })
)
const SubHeader = () => {
  const styles = useStyles()

  const [currentHoney, setCurrentHoney] = useState(HONEY_TYPES[0].honey)

  const handleHoney = honey => {
    setCurrentHoney(honey)
  }

  const beekeepersFetching = honey => {
    const url = `${MAIN_API}${BEEKEPERS}?honey=${honey}`
    const res = fetch(url).then(async res => {
      const data = await res.json()
      console.log("data: ", data)
    })
  }

  useEffect(() => {
    beekeepersFetching(currentHoney)
  }, [currentHoney])

  return (
    <ul className={styles.honeyList}>
      {HONEY_TYPES.map(({ honey, isNew }) => {
        const isCurrent = honey === currentHoney

        return (
          <li className={styles.item} key={honey}>
            <button onClick={() => handleHoney(honey)}>
              <Typography
                variant="body1"
                className={isCurrent ? styles.currentHoney : styles.honeyName}
              >
                {honey}
              </Typography>
              {isNew ? (
                <Typography variant="body1" className={styles.isNewHoney}>
                  Novità
                </Typography>
              ) : null}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default SubHeader
