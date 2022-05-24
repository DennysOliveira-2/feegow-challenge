import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { NonNullExpression } from "typescript";
import IProfessional from "../../domain/entities/Professional";
import ISpecialty from "../../domain/entities/Specialty";

interface IProps {
  professional: IProfessional | null;
  specialtyId: number;
  isVisible: boolean;
}

export default function AppointmentModalForm(props: IProps) {
  const { isVisible, professional, specialtyId } = props;
  const handleClose = () => {};

  const handleShow = () => {};

  return (
    <Modal
      size="lg"
      centered
      show={isVisible}
      backdrop="static"
      keyboard={false}
      onHide={handleClose}
    >
      <Modal.Header>
        <h3>Confirme seu Agendamento</h3>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" name="name" autoFocus />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Como nos conheceu?</Form.Label>
              <Form.Select>
                <option value={0}></option>
                {/* {data &&
                  data.content.map((spec: ISpecialty) => {
                    return (
                      <option
                        key={spec.especialidade_id}
                        value={spec.especialidade_id}
                      >
                        {spec.nome}
                      </option>
                    );
                  })} */}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
        <Form></Form>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
          </Col>
          <Col>
            <Button variant="primary">Confirmar</Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
}
