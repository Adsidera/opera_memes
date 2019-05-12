import React from "react"
import Layout from "../components/layout"
import MainAnimation from "../components/animations/MainAnimation"
import Header from "../components/header"

const IndexPage = ({ children }) => (
  <Layout>
    <Header />
    <MainAnimation />
  </Layout>
)
export default IndexPage
