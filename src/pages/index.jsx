import React from "react"
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

import theme from "../themes/theme-light"
import Layout from "../components/Layout"

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: theme.typography.fontFamily,
    padding: 5,

    [theme.breakpoints.up("md")]: {
      padding: 20,
      marginBottom: 50,
    },
    boxSizing: "border-box",
  },
  title: {
    color: "red",
  },
})

const Index = () => {
  const styles = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <Typography variant="h1" classes={styles.title}>
          Hello
        </Typography>
      </Layout>
    </MuiThemeProvider>
  )
}

export default Index
