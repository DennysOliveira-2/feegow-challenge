import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { appointmentsRepository } from "../../../implementation/factories/repositories";
import Layout from "../../components/Layout";
import IAppointment from "../../domain/entities/Appointment";
import AppointmentCard from "./AppointmentCard";
import styles from "./Appointments.module.scss";

export default function Appointments() {
  document.title = "Agendamentos | Sua Clínica";
  const [data, setData] = useState<IAppointment[]>();
  const navigate = useNavigate();

  useEffect(() => {
    appointmentsRepository.findMany().then((response) => {
      if (response && response.length >= 1) {
        setData(response);
        console.log(response);
      }
    });
  }, [localStorage]);

  const handleDelete = async (appointmentId: string) => {
    const result = await appointmentsRepository.deleteOne(appointmentId);
    console.log(appointmentId);
    if (result) {
      toast.success("Agendamento deletado com sucesso!");
      navigate(0);
    } else {
      toast.error("Ocorreu um erro ao deletar esse agendamento.");
    }
  };

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h4 className={styles.title}>Meus Agendamentos</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            {data ? (
              data.map((appointment) => {
                return (
                  <AppointmentCard
                    key={appointment.id}
                    deleteCallback={handleDelete}
                    appointment={appointment}
                  />
                );
              })
            ) : (
              <h5>Não há agendamentos.</h5>
            )}{" "}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
