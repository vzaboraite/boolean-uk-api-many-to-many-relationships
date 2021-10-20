const prisma = require("../../utils/db");

/* CREATE Controllers */

const createOne = async (req, res) => {
  const { firstName, lastName, dateOfBirth } = req.body;

  try {
    const data = await prisma.patient.create({
      data: {
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
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

module.exports = { getAll, createOne };
