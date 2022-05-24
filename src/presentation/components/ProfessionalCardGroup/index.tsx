import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import useFetch from "../../../implementation/hooks/UseFetch";
import IProfessional from "../../domain/entities/Professional";
import Separator from "../Helpers/Separator";
import ProfessionalCard from "../ProfessionalCard";

interface IProfessionalResponseData {
  success: boolean;
  content: IProfessional[];
  total: number;
}

interface IProps {
  callbackAppointment: Function;
  specialtyId: number;
}

export default function ProfessionalCardGroup(props: IProps) {
  const { specialtyId } = props;

  const {
    data,
    isPending,
    error,
  }: { data: IProfessionalResponseData; isPending: boolean; error: any } =
    useFetch(
      "https://demo4450529.mockable.io/feegow-challenge/professional/list",
      { method: "GET" }
    );

  const professionals: IProfessional[] = [];

  if (specialtyId === 0) return <></>;
  if (data) {
    data.content.filter((professional) => {
      professional.especialidades.forEach((spec) => {
        if (spec.especialidade_id == specialtyId) {
          professionals.push(professional);
          return true;
        } else return false;
      });
    });

    return (
      <>
        <Col>
          <Row>
            <Separator padding={"mt-5"} margin={"mb-3"} />
          </Row>
          <Row>
            <h4 className="mt-4 mb-3">
              Encontramos os seguintes profissionais para você:
            </h4>
          </Row>
          <Row xs={1} sm={1} md={2} xl={2} xxl={3}>
            {professionals &&
              professionals.map((professional: IProfessional) => {
                return (
                  <Col key={professional.profissional_id}>
                    <ProfessionalCard
                      callbackAppointment={props.callbackAppointment}
                      data={professional}
                    />
                  </Col>
                );
              })}
          </Row>
        </Col>
      </>
    );
  }

  return (
    <>
      {isPending && <p>Carregando resultados...</p>}
      {error && <p>Something went wrong with the requisited resource.</p>}
    </>
  );
}
