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
            alt={datum.title}
            title={datum.title}
            style={{ width: "17px" }}
          />
        )
      })
    }

    const panelHeader = person => (
      <p>
        <span style={{ fontWeight: "600" }}>{person.person_name}</span>
        {` - "${person.title}"`}
      </p>
    )

    return results.map((person, idx) => {
      return (
        <Panel key={idx} header={panelHeader(person)}>
          <style global jsx>{`
            @media (max-width: 767px) {
              .person_thumb {
                width: 92px;
              }
            }
          `}</style>
          <Grid style={{ padding: "0px" }} fluid>
            <Row>
              <Col xs={6} sm={2} style={{ marginLeft: "0px" }}>
                <div style={{ textAlign: "center" }}>
                  <img src={person.person_thumb} className="person_thumb" />
                  <p
                    style={{ fontSize: "12px", margin: "0px" }}
                  >{`(${person.ratings_average}) Stars`}</p>
                </div>
              </Col>

              <Col xs={6} sm={2} col-sm-push={8}>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "12px", margin: "0px" }}>from</p>
                  <p
                    style={{ fontSize: "36px", color: "green", margin: "0px" }}
                  >{`$${Math.floor(person.price)}`}</p>
                  <p style={{ fontSize: "12px", margin: "0px" }}>per night</p>
                  <p>{renderBadgeData(person.badge_data)}</p>
                </div>
              </Col>
              <Col col-sm-pull={2} xs={12} sm={8}>
                <p>{person.review_text}</p>
                <p>{`${person.city}, ${person.state} `}</p>
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
