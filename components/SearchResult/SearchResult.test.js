import setUpTest from "../../utils/setUpTests.js"
import React from "react"
import { shallow } from "enzyme"
import SearchResult from "./SearchResult"

import { Provider } from "mobx-react"
import { getOrCreateStore } from "../../stores/SearchStore"

let searchStore = getOrCreateStore(true)

const searchResult = shallow(
  <Provider>
    <SearchResult />
  </Provider>
)

describe("SearchResult", () => {
  it("renders correctly", () => {
    expect(searchResult).toMatchSnapshot()
  })
})
