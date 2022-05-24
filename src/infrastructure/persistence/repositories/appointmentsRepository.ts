import IAppointment from "../../../presentation/domain/entities/Appointment";

class AppointmentsRepository {
  async saveOne(newAppoint: IAppointment) {
    const appointmentsJSON = localStorage.getItem("appointments");
    //
    if (appointmentsJSON) {
      //
      const exists = await this.findOne(String(newAppoint.id));
      if (exists) {
        return false;
        //
      } else {
        const appointments: IAppointment[] = await JSON.parse(appointmentsJSON);
        appointments.push(newAppoint);
        localStorage.setItem("appointments", JSON.stringify(appointments));
        return true;
      }
      //
    } else {
      const appointments: IAppointment[] = [];
      appointments.push(newAppoint);
      localStorage.setItem("appointments", JSON.stringify(appointments));
      return true;
    }
  }

  async findOne(appointmentId: string) {
    const appointmentsJSON = localStorage.getItem("appointments");

    if (appointmentsJSON) {
      const appointments: IAppointment[] = await JSON.parse(appointmentsJSON);

      appointments.forEach((app) => {
        if (app.id === appointmentId) {
          return app;
        }
      });
    }

    return null;
  }

  async findMany() {
    const appointmentsJSON = localStorage.getItem("appointments");
    if (appointmentsJSON) {
      const appointments: IAppointment[] = await JSON.parse(appointmentsJSON);
      return appointments;
    } else {
      return null;
    }
  }

  async deleteOne(appointmentId: string) {
    const appointmentsJSON = localStorage.getItem("appointments");

    if (appointmentsJSON) {
      const appointments: IAppointment[] = await JSON.parse(appointmentsJSON);
      const newAppointsment = appointments;

      appointments.forEach((app, index) => {
        if (app.id == appointmentId) {
          newAppointsment.splice(index, 1);
        }
      });
      localStorage.setItem("appointments", JSON.stringify(newAppointsment));
      return true;
    }

    return null;
  }
}

export { AppointmentsRepository };
