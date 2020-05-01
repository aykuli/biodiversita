import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"

import theme from "../themes/theme-light"

import Layout from "../components/Layout"
import MainInfo from "../components/MainInfo"

const Index = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        <MainInfo />
      </Layout>
    </MuiThemeProvider>
  )
}

export default Index
