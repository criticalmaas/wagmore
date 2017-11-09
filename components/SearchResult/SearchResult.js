import React from "react"
import { observer, inject } from "mobx-react"

import { Grid, Row, Col, Panel } from "react-bootstrap"

const SearchResult = ({ searchStore, props }) => {
  let results = searchStore.results.slice()

  const loopOverResults = () => {
    const renderBadgeData = data => {
      return data.map((datum, i) => {
        return (
          <img
            key={i}
            src={datum.image_url}
            title={datum.image_url}
            style={{ width: "17px" }}
          />
        )
      })
    }

    const panelHeader = person => (
      <span>
        <span>{person.person_name + ' - "' + person.title + '"'}</span>
        <span style={{ float: "right" }}>
          {renderBadgeData(person.badge_data)}
        </span>
      </span>
    )

    return results.map((person, idx) => {
      return (
        <Panel key={idx} header={panelHeader(person)}>
          <Grid style={{ padding: "0px" }}>
            <Row>
              <Col xs={2} style={{ marginLeft: "0px" }}>
                <div style={{ textAlign: "center" }}>
                  <img src={person.person_thumb} style={{ width: "75px" }} />
                  <p
                    style={{ fontSize: "12px", margin: "0px" }}
                  >{`(${person.ratings_average}) Stars`}</p>
                </div>
              </Col>
              <Col xs={8}>
                <p>{`${person.city}, ${person.state} `}</p>
                <p>{person.review_text}</p>
              </Col>
              <Col xs={2}>
                <div style={{ textAlign: "center" }}>
                  <p>from</p>
                  <p
                    style={{ fontSize: "36px", color: "green", margin: "0px" }}
                  >{`$${Math.floor(person.price)}`}</p>
                  <p style={{ fontSize: "12px", margin: "0px" }}>per night</p>
                </div>
              </Col>
            </Row>
          </Grid>
        </Panel>
      )
    })
  }

  return loopOverResults()
}

export default inject("searchStore")(observer(SearchResult))
