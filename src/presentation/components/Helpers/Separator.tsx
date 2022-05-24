import React from "react";
import { Col } from "react-bootstrap";
import styles from "./Separator.module.scss";

interface IProps {
  padding: string;
  margin: string;
}

export default function Separator(props: IProps) {
  return (
    <Col
      className={
        styles.separator + ` offset-3 col-6 ${props.padding} ${props.margin}`
      }
    ></Col>
  );
}
