import React from "react"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import { Typography, AppBar } from "@material-ui/core"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Box from "@material-ui/core/Box"

import { WHAT_IS_3BEE } from "../../../static/constantas"

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const a11yProps = str => {
  return {
    id: `tab-${str}`,
    "aria-controls": `tabpanel-${str}`,
  }
}

const useStyles = makeStyles(theme => ({
  container: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    margin: "0 auto 100px",
  },
  title: {
    marginBottom: 60,
    lineHeight: 1,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    marginBottom: 60,
    backgroundColor: theme.palette.background.default,
    boxShadow: "none",
    "& div div": {
      justifyContent: "space-between",
      "& span.MuiTabs-indicator": {
        width: "33%",
        height: 4,
        backgroundColor: theme.palette.text.primary,
      },
    },
  },
  tap: {
    maxWidth: "33%",
    width: "33%",
    fontSize: 30,
    lineHeight: 1.9,
    color: "#3C3B3B",
  },
  bar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 4,
    width: "100%",
    backgroundColor: "#c4c4c4",
    zIndex: -1,
  },
  desc: {
    fontSize: 25,
    lineHeight: 1.3,
    textAlign: "center",
  },
}))

const WhatIs3Bee = () => {
  const styles = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const title = "Cos’è un’adozione 3Bee?"
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        {title}
      </Typography>
      <TabPanel value={value} index={0}>
        Monitoraggio0
      </TabPanel>
      <TabPanel value={value} index={1}>
        Certificato1
      </TabPanel>
      <TabPanel value={value} index={2}>
        Miele genuino2
      </TabPanel>
      <AppBar position="static" className={styles.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label={title}>
          {WHAT_IS_3BEE.map(({ title }) => (
            <Tab
              key={title}
              label={title}
              {...a11yProps(title)}
              className={styles.tap}
            />
          ))}
        </Tabs>
        <div className={styles.bar} />
      </AppBar>
      {WHAT_IS_3BEE.map(({ description }, index) => (
        <TabPanel value={value} index={index} className={styles.desc}>
          {description}
        </TabPanel>
      ))}
    </div>
  )
}

export default WhatIs3Bee
