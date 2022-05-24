export default interface IProfessional {
  profissional_id: number;
  nome: string;
  tratamento: string;
  rqe: string;
  conselho: string;
  uf_conselho: string;
  documento_conselho: string;
  foto: string;
  sexo: string;
  especialidades: IProfessionalSpecialty[];
}

interface IProfessionalSpecialty {
  especialidade_id: number;
  nome_especialidade: string;
  CBOS: string;
}
