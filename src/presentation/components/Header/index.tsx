import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <Container className={styles.header + " d-flex"}>
        <Row>
          <Col md="auto">
            <Link to="/" className={styles.homeHeader}>
              <h2 className={styles.title + " "}>Clínica Exemplo</h2>
            </Link>
          </Col>
          <Col md="auto">
            <Navbar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
