export default interface IAppointment {
  id: string;
  specialty_id: number;
  professional_id: number;
  name: string;
  cpf: string;
  source_id: number;
  birthdate: Date;
  date_time: Date;
}
