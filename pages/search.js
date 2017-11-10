import React from "react"
import { Provider } from "mobx-react"
import { getOrCreateStore } from "../stores/SearchStore"

import Layout from "../components/Layout"
import SearchBox from "../components/SearchBox"
import SearchResult from "../components/SearchResult"

export default class Search extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req
    const searchStore = getOrCreateStore(isServer)
    return { isServer }
  }

  constructor(props) {
    super(props)
    this.searchStore = getOrCreateStore(props.isServer)
  }

  render() {
    return (
      <Provider searchStore={this.searchStore}>
        <Layout>
          <SearchBox />
          <SearchResult />
        </Layout>
      </Provider>
    )
  }
}

// import React from "react"
// import PropTypes from "prop-types"

// import Link from "next/link"
// import "isomorphic-fetch"

// import Layout from "../components/Layout"
// import SearchBox from "../components/SearchBox"
// import SearchResult from "../components/SearchResult"

// const searchType = "overnight-boarding"
// const query = {
//   centerlat: "47.7993186",
//   centerlng: "-122.3096406"
// }

// class Search extends React.Component {
//   static propTypes = {
//     people: PropTypes.array
//   }

//   static defaultProps = {
//     people: []
//   }

//   static async getInitialProps() {
//     // eslint-disable-next-line no-undef
//     const res = await fetch(
//       "https://www.rover.com/api/v3/search/overnight-boarding/?centerlat=47.7993186&centerlng=-122.3096406"
//     )
//     const json = await res.json()

//     return { people: json.results }
//   }

//   render() {
//     return (
//       <Layout>
//         <SearchBox />
//         {this.props.people &&
//           this.props.people.map((person, i) => {
//             return <SearchResult key={i} person={person} />
//           })}
//       </Layout>
//     )
//   }
// }

// export default Search
