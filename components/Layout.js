import Link from "next/link"
import Head from "next/head"
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
  ButtonToolbar,
  Grid,
  Row,
  Col
} from "react-bootstrap"
import Footer from "./Footer/Footer.js"
import LinkFixer from "../utils/LinkFixer"

export default ({ children, title = "Ryan Maas Interview" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* ugly ugly ugly - but for some reason import and require did not work...*/}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
    </Head>
    <header>
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkFixer href="/" prefetch>
              <a className="navbar-brand">Wagmore</a>
            </LinkFixer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkFixer href="/search" prefetch>
              <NavItem eventKey={1}>Search</NavItem>
            </LinkFixer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
    <Grid>
      <Row>
        <Col xs={12}>{children}</Col>
      </Row>
    </Grid>
    <Grid>
      <Row>
        <Col xs={12}>
          <Footer />
        </Col>
      </Row>
    </Grid>
  </div>
)
