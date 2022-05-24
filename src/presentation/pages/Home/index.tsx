import React, { SyntheticEvent, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap/";
import useFetch from "../../../implementation/hooks/UseFetch";
import Separator from "../../components/Helpers/Separator";
import Layout from "../../components/Layout";
import ProfessionalCard from "../../components/ProfessionalCard";
import ProfessionalCardGroup from "../../components/ProfessionalCardGroup";
import IProfessional from "../../domain/entities/Professional";
import ISpecialty from "../../domain/entities/Specialty";
import AppointmentModalForm from "./AppointmentModalForm";
import styles from "./Home.module.scss";

interface IResponseData {
  success: boolean;
  content: ISpecialty[];
  total: number;
}

interface IFormValues {
  specialtyId: number;
}

export default function Home() {
  const [formValues, setFormValues] = useState<IFormValues>({
    specialtyId: 0,
  });
  const [hidden, setHidden] = useState<boolean>(true);
  const [specialty, setSpecialty] = useState<number>(0);
  const [professional, setProfessional] = useState<IProfessional | null>(null);
  const [modalVisible, setModalVisibility] = useState<boolean>(false);

  const {
    data,
    isPending,
    error,
  }: { data: IResponseData; isPending: boolean; error: any } = useFetch(
    "https://demo4450529.mockable.io/feegow-challenge/specialties/list",
    { method: "GET" }
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(`${e.target.name} changed to [${e.target.value}]`);
    setHidden(true);
  };

  const handleSubmit = () => {
    setSpecialty(formValues.specialtyId);
    setHidden(false);
  };

  const handleAppointment = (data: IProfessional) => {
    setProfessional(data);
    setModalVisibility(true);
  };

  return (
    <Layout>
      <AppointmentModalForm
        professional={professional}
        specialtyId={specialty}
        isVisible={modalVisible}
      />

      <Container className={styles.container}>
        <Row>
          <Col>
            <h4>Informações</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className={"mt-4"}>
              Clinica de exemplo para o <i>Feegow Challenge</i>, que é permeada
              com os dados fornecidos pelos mocks da <i>Feegow API</i>.
            </p>
            <p>
              Consiste em uma aplicação <i>Web</i> que permite verificar as
              especialidades disponíveis, selecionar o profissional de interesse
              e agendar sua consulta, assim como visualizar seus agendamentos.
            </p>
            <p>
              Não há autenticação para este <i>mock</i>, portanto os
              agendamentos do usuário ficarão salvos no <i>SessionStorage</i>{" "}
              temporáriamente.
            </p>

            <p className="mt-4">Retorna uma lista de Especialidades</p>
            <p>
              <b>GET </b>
              https://demo4450529.mockable.io/feegow-challenge/specialties/list
            </p>
            <code>
              {
                "{ success: boolean; \n content: Especialidade[]; total: number; }"
              }
            </code>

            <p className="mt-4">Retorna uma lista de Profissionais</p>
            <p>
              <b>GET </b>
              https://demo4450529.mockable.io/feegow-challenge/professional/list
            </p>
            <code>
              {
                "{ success: boolean; \n content: Profissional[]; total: number; }"
              }
            </code>

            <p className="mt-4">Retorna uma lista de Origens</p>
            <p>
              <b>GET </b>
              https://demo4450529.mockable.io/feegow-challenge/specialties/list
            </p>
            <code>
              {"{ success: boolean; \n content: Origem[]; total: number; }"}
            </code>
          </Col>
        </Row>
        <Row>
          <Separator padding={"mt-5"} margin={"mb-3"} />
        </Row>
        <Row>
          <Col>
            <h4 className="mt-4 mb-3">Criar Nova Consulta</h4>
          </Col>
        </Row>
        {error ? (
          <h5>Houve um erro ao receber os dados do servidor.</h5>
        ) : (
          <>
            <Row>
              <Col lg={true}>
                <p className="mt-2">Tipo de Consulta</p>
              </Col>
              <Col lg={true}>
                <Form.Group>
                  <Form.Select onChange={handleChange} name="specialtyId">
                    <option value={0}></option>
                    {data &&
                      data.content.map((spec: ISpecialty) => {
                        return (
                          <option
                            key={spec.especialidade_id}
                            value={spec.especialidade_id}
                          >
                            {spec.nome}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Button onClick={handleSubmit}>Agendar</Button>
              </Col>
            </Row>
          </>
        )}
        <Row>
          <Col lg={true}>
            {hidden === true ? (
              <></>
            ) : (
              <ProfessionalCardGroup
                callbackAppointment={handleAppointment}
                specialtyId={formValues.specialtyId}
              />
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
