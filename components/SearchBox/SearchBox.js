/* global require */

import React from "react"
import { observer, inject } from "mobx-react"
import {
  Grid,
  Row,
  Col,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Button,
  InputGroup,
  Popover,
  OverlayTrigger,
  Glyphicon
} from "react-bootstrap"

const dropOffPopover = (
  <Popover id="popover-trigger-focus">
    <strong>Attention!</strong> I admittedly did not implement full featured
    calendar here due to time constraints
  </Popover>
)

const pickUpPopover = (
  <Popover id="popover-trigger-focus">
    Same goes here! Add that to the "TODO:" Pile
  </Popover>
)

const SearchBox = ({ searchStore }) => {
  const handleClick = e => {
    searchStore.fetch()
  }

  const handleChange = e => {
    let el = e.target
    searchStore.setPropertyValue(el.name, el.value)
  }

  return (
    <Panel>
      <style global jsx>{`
        @media (max-width: 767px) {
          .foo {
            margin-bottom: 10px;
          }
        }
      `}</style>

      <Grid fluid>
        <Row>
          <Col>
            <Form horizontal>
              <FormGroup controlId="test">
                <Col componentClass={ControlLabel} sm={2}>
                  <Glyphicon glyph="calendar" /> Date
                </Col>
                <Col sm={4} className="foo">
                  <InputGroup>
                    <InputGroup.Addon>Drop off</InputGroup.Addon>
                    <OverlayTrigger
                      trigger="focus"
                      placement="top"
                      overlay={dropOffPopover}
                    >
                      <FormControl
                        type="text"
                        placeholder="mm/dd/yyy"
                        name="dropOff"
                        onChange={handleChange}
                      />
                    </OverlayTrigger>
                  </InputGroup>
                </Col>
                <Col sm={4}>
                  <InputGroup>
                    <InputGroup.Addon>Pick up&nbsp;</InputGroup.Addon>
                    <OverlayTrigger
                      trigger="focus"
                      placement="top"
                      overlay={pickUpPopover}
                    >
                      <FormControl
                        type="text"
                        placeholder="mm/dd/yyy"
                        name="pickUp"
                        onChange={handleChange}
                      />
                    </OverlayTrigger>
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup controlId="price">
                <Col componentClass={ControlLabel} sm={2}>
                  <Glyphicon glyph="usd" />Price
                </Col>
                <Col sm={4} className="foo">
                  <InputGroup>
                    <InputGroup.Addon>Low&nbsp;</InputGroup.Addon>
                    <FormControl
                      type="text"
                      placeholder="in dollars"
                      name="priceLow"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
                <Col sm={4}>
                  <InputGroup>
                    <InputGroup.Addon>High</InputGroup.Addon>
                    <FormControl
                      type="text"
                      placeholder="in dollars"
                      name="priceHigh"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={5}>
                  <Button type="button" onClick={handleClick}>
                    Search
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
    </Panel>
  )
}

export default inject("searchStore")(observer(SearchBox))
