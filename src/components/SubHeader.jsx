import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import { HONEY_TYPES } from "../../static/constantas"

const useStyles = makeStyles(() =>
  createStyles({
    honeyList: {
      display: "inline-flex",

      backgroundColor: "#F8F8F9",
      listStyle: "none",
    },
    item: {},
    honeyName: {
      fontSize: 12,
    },
    isNewHoney: {
      fontSize: 10,
      color: "#D30F0F",
    },
  })
)
const SubHeader = () => {
  const styles = useStyles()
  return (
    <ul className={styles.honeyList}>
      {HONEY_TYPES.map(({ honeyType, isNew }) => {
        return (
          <li className={styles.item} key={honeyType}>
            <Typography variant="body1" className={styles.honeyName}>
              {honeyType}
            </Typography>
            {isNew ? (
              <Typography variant="body1" className={styles.isNewHoney}>
                Novità
              </Typography>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}

export default SubHeader
