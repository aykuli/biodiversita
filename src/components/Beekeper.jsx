import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      maxWidth: 1440,
      margin: "auto",
      padding: "40px 0 40px 57px",
    },
    slogan: {
      fontWeight: "normal",
      marginBottom: 70,
    },
    photosAndVideos: {
      backgroundColor: "#bbffbb",
      width: 1174,
      height: 810,
      margin: "0 auto 89px",
    },
    impactForPlanet: {
      display: "flex",
      justifyContent: "space-between",
    },
    impactTxt: {
      marginBottom: 40,
    },
  })
)

const BeeKeeper = ({ beekeeperName }) => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <Typography variant="h2" color="primary" className={styles.title}>
        {beekeeperName}
      </Typography>
      <Typography variant="h3" className={styles.slogan}>
        Conosci il tuo apicoltore
      </Typography>
      <div className={styles.photosAndVideos}></div>
      <div className={styles.impactForPlanet}>
        <div className={styles.impactLeft}>
          <Typography variant="h3">
            Esplora l’impatto per il pianeta di Apicoltura Galati{" "}
          </Typography>
          <Typography variant="body1" className={styles.impactTxt}>
            L’Azienda Agricola Apistica di Galati Fabio nasce nel 2014,
            dall’esperienza trentennale ereditata dal padre Francesco.
          </Typography>
          <Typography variant="body1" className={styles.impactTxt}>
            Con sede a Curinga nella provincia di Catanzaro in Calabria, Fabio
            produce miele vergine integrale con lavorazione a freddo.{" "}
          </Typography>
          <Typography variant="body1" className={styles.impactTxt}>
            Non solo apicoltore, ma anche allevatore di regine, nel 2020 Fabio
            entra nell’Albo Nazionale degli Allevatori di Api Italiane.
          </Typography>
        </div>
      </div>
    </div>
  )
}

export default BeeKeeper
