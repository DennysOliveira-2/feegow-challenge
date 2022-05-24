import Header from "../Header";
import styles from "./Layout.module.scss";
import { Container } from "react-bootstrap";

interface ILayoutProps {
  children: any;
}

function Layout(props: ILayoutProps) {
  return (
    <Container className={styles.container}>
      <Header />
      <Container className={styles.childrenContainer + " mt-3 mb-5 p-3"}>
        {props.children}
      </Container>
    </Container>
  );
}

export default Layout;
