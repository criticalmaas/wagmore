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

  const handleDateChange = e => {
    let el = e.target
    searchStore.setDateValue(el.name, el.value)
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

        input:invalid,
        input:focus:invalid {
          /* insert your own styles for invalid form input */
          border: solid 2px red;
        }

        input:valid,
        input:focus:valid {
          border: 1px solid #ccc;
        }
      `}</style>

      <Grid fluid>
        <Row>
          <Col>
            <Form horizontal>
              <FormGroup>
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
                        placeholder="YYYY-MM-DD"
                        name="dropOff"
                        pattern="\d{4}-\d{2}-\d{2}"
                        value={searchStore.dropOff}
                        onChange={handleDateChange}
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
                        placeholder="YYYY-MM-DD"
                        name="pickUp"
                        pattern="\d{4}-\d{2}-\d{2}"
                        value={searchStore.pickUp}
                        onChange={handleDateChange}
                      />
                    </OverlayTrigger>
                  </InputGroup>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} sm={2}>
                  <Glyphicon glyph="usd" />Price
                </Col>
                <Col sm={4} className="foo">
                  <InputGroup>
                    <InputGroup.Addon>Low&nbsp;</InputGroup.Addon>
                    <FormControl
                      type="text"
                      placeholder="in dollars (min $0)"
                      name="priceLow"
                      pattern="\d{1,3}"
                      value={searchStore.priceLow}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
                <Col sm={4}>
                  <InputGroup>
                    <InputGroup.Addon>High</InputGroup.Addon>
                    <FormControl
                      type="text"
                      placeholder="in dollars (max $150)"
                      name="priceHigh"
                      pattern="\d{1,3}"
                      value={searchStore.priceHigh}
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={5}>
                  {searchStore.areDatesValid &&
                    searchStore.arePricesValid && (
                      <Button type="button" onClick={handleClick}>
                        Search
                      </Button>
                    )}
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
