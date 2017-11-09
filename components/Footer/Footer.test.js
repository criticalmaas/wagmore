import setUpTest from "../../utils/setUpTests.js"
import React from "react"
import { shallow } from "enzyme"
import Footer from "./Footer"

const footer = shallow(<Footer />)

describe("Footer", () => {
  it("renders correctly", () => {
    expect(footer).toMatchSnapshot()
  })
})
