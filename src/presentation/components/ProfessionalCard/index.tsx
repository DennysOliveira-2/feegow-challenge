import { Container, Card, Col, Nav, Row, Button } from "react-bootstrap";
import IProfessional from "../../domain/entities/Professional";
import Separator from "../Helpers/Separator";
import styles from "./styles.module.scss";

interface IProps {
  data: IProfessional;
  callbackAppointment: Function;
}

export default function ProfessionalCard(props: IProps) {
  const { data } = props;

  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <Container className={styles.cardContainer}>
      <Row className={"d-flex align-content-center"}>
        <Col className={styles.header}>
          {data.foto ? (
            <img src={data.foto} className={styles.cardImage} />
          ) : (
            <img
              src={
                "https://functions.feegow.com/load-image?licenseId=105&folder=Perfil&file=f0e460294f5196a705ca043c626b5666.jpg&renderMode=download"
              }
              className={styles.cardImage}
            />
          )}
        </Col>
        <Col sm={"auto"}>
          <p className={styles.title}>
            <b>
              {data.tratamento
                ? `${data.tratamento} ${data.nome}`
                : `${data.nome}`}
            </b>
          </p>
          <p className={styles.sub}>
            {data.conselho && data.documento_conselho ? (
              `${data.conselho} ${data.documento_conselho} - ${data.uf_conselho}`
            ) : (
              <p>Nº Conselho não encontrado.</p>
            )}
          </p>
        </Col>
      </Row>
      <Row className="">
        <Separator classes="mt-4 mb-4" />
      </Row>
      <Row>
        <Col sm={"auto"}>
          <Button
            onClick={() => {
              props.callbackAppointment(data);
            }}
            className={styles.button}
          >
            Agendar
          </Button>
        </Col>
      </Row>
    </Container>
    // <Card bg="light" className={styles.container}>
    //   <Card.Header className={styles.header}>
    //     {capitalize(data.nome)}
    //   </Card.Header>
    //   {data.foto ? (
    //     <Card.Img className={styles.miniPic} variant="top" src={data.foto} />
    //   ) : (
    //     <Card.Img
    //       variant="top"
    //       className={styles.miniPic}
    //       src={
    //         "https://functions.feegow.com/load-image?licenseId=105&folder=Perfil&file=f0e460294f5196a705ca043c626b5666.jpg&renderMode=download" // Placeholder Image
    //       }
    //     />
    //   )}

    //   <Card.Body>
    //     <p>
    //       {data.conselho && data.documento_conselho ? (
    //         data.conselho + " " + data.documento_conselho
    //       ) : (
    //         <>Nº Conselho não encontrado.</>
    //       )}
    //     </p>
    //   </Card.Body>
    //   <Button className={"m-2"}>Agendar</Button>
    // </Card>
  );
}

function capitalize(sentence: string) {
  const words = sentence.toLowerCase().split(" ");
  words.forEach((word, i) => {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  });

  return words.join(" ");
}
