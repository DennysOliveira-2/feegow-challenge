import IAppointment from "../../domain/entities/Appointment";
import styles from "./Appointments.module.scss";
import { Col, Container, Row, Button } from "react-bootstrap";

interface IProps {
  appointment: IAppointment;
  deleteCallback: Function;
}
export default function AppointmentCard(props: IProps) {
  const { appointment, deleteCallback } = props;

  return (
    <Container key={appointment.id} className={styles.appointmentCard}>
      <Row>
        <Col>
          <h5>Paciente</h5>
        </Col>
        <Col>
          <h5>Atendimento</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <b>Nome:</b> {appointment.name} <br />
          <b>Data de Nascimento: </b>
          {`${new Date(appointment.birthdate).getDay()}/${new Date(
            appointment.birthdate
          ).getMonth()}/${new Date(appointment.birthdate).getUTCFullYear()}`}
        </Col>
        <Col>
          <b>Horário do Agendamento:</b>
          <br />
          {new Date(appointment.date_time).toUTCString()}
        </Col>
      </Row>
      <Row>
        <Col>
          <b>CPF: </b> {appointment.cpf}
        </Col>
        <Col>
          <b>ID da Especialidade: </b>
          {appointment.specialty_id} <br />
          <b>ID do Profissional: </b>
          {appointment.professional_id} <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => {
              deleteCallback(appointment.id);
            }}
          >
            Cancelar Agendamento
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
