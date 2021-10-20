const prisma = require("../../utils/db");

const getAll = async (req, res) => {
  try {
    const data = await prisma.patient.findMany();

    res.json({ data });
  } catch (error) {
    console.error({ error: error.message });

    res.json({ error: error.message });
  }
};

module.exports = { getAll };
