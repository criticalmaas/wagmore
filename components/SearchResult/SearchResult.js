import React from "react"
import { observer, inject } from "mobx-react"

import { Grid, Row, Col, Panel } from "react-bootstrap"

const SearchResult = ({ searchStore, props }) => {
  let results = searchStore.results.slice()
  console.log("length", results.slice())

  const loopOverResults = () => {
    return results.map((person, idx) => {
      return (
        <Panel
          key={idx}
          header={person.person_name + ' - "' + person.title + '"'}
        >
          <Grid>
            <Row>
              <Col>{}</Col>
            </Row>
          </Grid>
        </Panel>
      )
    })
  }

  return loopOverResults()
}

export default inject("searchStore")(observer(SearchResult))
