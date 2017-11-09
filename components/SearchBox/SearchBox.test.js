import setUpTest from "../../utils/setUpTests.js"
import React from "react"
import { shallow } from "enzyme"
import SearchBox from "./SearchBox"

import { Provider } from "mobx-react"
import { getOrCreateStore } from "../../stores/SearchStore"

let searchStore = getOrCreateStore(true)

const searchBox = shallow(
  <Provider>
    <SearchBox />
  </Provider>
)

describe("SearchBox", () => {
  it("renders correctly", () => {
    expect(searchBox).toMatchSnapshot()
  })
})
