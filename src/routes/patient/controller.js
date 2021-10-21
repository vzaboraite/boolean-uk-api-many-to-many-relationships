const prisma = require("../../utils/db");

/* CREATE Controllers */

const createPatientWithAppointment = async (req, res) => {
  const { firstName, lastName, dateOfBirth, appointment } = req.body;
  const { practiceName, reason, dateTime } = appointment;

  try {
    const data = await prisma.patient.create({
      data: {
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
        appointments: {
          create: [
            {
              practiceName,
              reason,
              dateTime: new Date(dateTime),
            },
          ],
        },
      },
      include: {
        appointments: true,
      },
    });

    res.json({ data });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

/* READ Controllers */

const getAll = async (req, res) => {
  try {
    const data = await prisma.patient.findMany();

    res.json({ data });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll, createPatientWithAppointment };
