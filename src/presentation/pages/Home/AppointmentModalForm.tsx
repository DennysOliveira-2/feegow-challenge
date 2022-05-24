import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useFetch from "../../../implementation/hooks/UseFetch";
import IProfessional from "../../domain/entities/Professional";
import ISource from "../../domain/entities/Source";
import styles from "./Modal.module.scss";
import { appointmentsRepository } from "../../../implementation/factories/repositories";
import IAppointment from "../../domain/entities/Appointment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IProps {
  professional: IProfessional;
  specialtyId: number;
  isVisible: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFormValues {
  name: string;
  cpf: string;
  source_id: number;
  birthdate: Date;
}

interface IResponseData {
  success: boolean;
  content: ISource[];
  total: number;
}

export default function AppointmentModalForm(props: IProps) {
  const navigate = useNavigate();
  const { isVisible, setVisibility, professional, specialtyId } = props;
  const [formValues, setFormValues] = useState<IFormValues>({
    birthdate: new Date(),
    cpf: "",
    name: "",
    source_id: 0,
  });
  const handleClose = () => {
    setVisibility(false);
  };

  const {
    data: sources,
    isPending,
    error,
  }: { data: IResponseData; isPending: boolean; error: any } = useFetch(
    "https://demo4450529.mockable.io/feegow-challenge/patient/list-sources",
    { method: "GET" }
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault(e);
    console.log(formValues);

    const newAppointment: IAppointment = {
      id: crypto.randomUUID(),
      birthdate: formValues.birthdate,
      cpf: formValues.cpf,
      name: formValues.name,
      source_id: formValues.source_id,
      professional_id: professional.profissional_id,
      specialty_id: specialtyId,
      date_time: new Date(),
    };

    const result = await appointmentsRepository.saveOne(newAppointment);
    console.log(result);
    if (result) {
      toast.success("Agendamento registrado com sucesso!");
      navigate("/appointments");
    } else {
      toast.error("Ouve um erro ao tentar registrar o seu agendamento.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | any>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(`${e.target.name} changed to [${e.target.value}]`);
  };

  return (
    <Modal
      size="lg"
      centered
      show={isVisible}
      backdrop="static"
      keyboard={false}
      onHide={handleClose}
      className={styles.container}
    >
      <Form onSubmit={handleSubmit}>
        <Modal.Header>
          <h3>Confirme seu Agendamento</h3>
        </Modal.Header>
        <Modal.Body className={styles.body}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  autoFocus
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Como nos conheceu?</Form.Label>
                <Form.Select name="source_id" onChange={handleChange} required>
                  <option value={0}></option>
                  {sources &&
                    sources.content.map((source) => {
                      return (
                        <option key={source.origem_id} value={source.origem_id}>
                          {source.nome_origem}
                        </option>
                      );
                    })}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  name="birthdate"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  placeholder="CPF"
                  // pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                Confirmar
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
