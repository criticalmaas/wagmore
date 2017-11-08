import React from "react"
import { Provider } from "mobx-react"
import { getOrCreateStore } from "../stores/SearchStore"

import Layout from "../components/Layout"
import { Grid, Row, Col } from "react-bootstrap"

export default class Counter extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const store = getOrCreateStore(isServer)
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.store = getOrCreateStore(props.isServer)
  }

  render() {
    return (
      <Provider store={this.store}>
        <Layout />
      </Provider>
    )
  }
}
