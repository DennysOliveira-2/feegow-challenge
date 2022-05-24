import React from "react";
import { Col } from "react-bootstrap";
import styles from "./Separator.module.scss";

interface IProps {
  classes?: string;
}

const Separator: React.FC<IProps> = (props) => {
  return (
    <Col
      className={styles.separator + ` offset-3 col-6 ${props.classes}`}
    ></Col>
  );
};

Separator.defaultProps = { classes: "mt-2 mb-2" };

export default Separator;
