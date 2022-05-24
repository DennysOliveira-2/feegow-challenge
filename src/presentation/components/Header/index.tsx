import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

function Header() {
  return (
    <>
      <Container
        className={styles.header + " py-3 d-flex align-content-center"}
      >
        <Row>
          <Col>
            <Link to="/" className={styles.homeHeader}>
              <h2 className={styles.title + " "}>Clínica Exemplo</h2>
            </Link>
          </Col>
          <Col className={"col-auto float-right"}>
            <Navbar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
