import React, { useState, useEffect } from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import { MAIN_API, BEEKEPER_DESCRIPTION } from "../../static/constantas"
import { Typography } from "@material-ui/core"

import Gallery from "./Gallery"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {},
    beekeeperDesc: {
      fontWeight: "bold",
    },
  })
)

const MainInfo = () => {
  const styles = useStyles()

  const [beekeeperId, setBeekeeperId] = useState(2)
  const [beekeeperInfo, setBeekeeperInfo] = useState(null)
  const [beekeeperDesc, setBeekeeperDesc] = useState(null)

  const beekeeperFetching = async id => {
    const url = `${MAIN_API}${BEEKEPER_DESCRIPTION}${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log("data: ", data)

    setBeekeeperInfo(data)
    setBeekeeperDesc(data.beekeeper_description.slice(0, 50))
  }

  // TODO how to process fetched images with gatsby

  useEffect(() => {
    beekeeperFetching(beekeeperId)
  }, [beekeeperId])

  return beekeeperInfo ? (
    <div className={styles.container}>
      <Typography variant="h2" color="primary">
        {beekeeperInfo.name}
      </Typography>
      <Typography variant="body1" className={styles.beekeeperDesc}>
        {beekeeperDesc}
      </Typography>
      <Typography variant="body1">
        {beekeeperInfo.company_description}
      </Typography>
      <Gallery images={beekeeperInfo.images} />
    </div>
  ) : null
}

export default MainInfo
