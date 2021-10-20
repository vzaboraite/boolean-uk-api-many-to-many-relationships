const { appointmentsOnDoctors } = require("../../utils/db");
const prisma = require("../../utils/db");

/* READ Controllers */

const getAll = async (req, res) => {
  try {
    const data = await prisma.doctor.findMany();

    res.json({ data });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

const getDoctorWithAppointments = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await prisma.doctor.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        appointments: {
          include: {
            appointment: true,
          },
        },
      },
    });

    const cleanedAppointments = data.appointments.map(
      (appointment) => appointment.appointment
    );

    const result = {
      ...data,
      appointments: cleanedAppointments,
    };

    res.json({ data: result });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, getDoctorWithAppointments };
