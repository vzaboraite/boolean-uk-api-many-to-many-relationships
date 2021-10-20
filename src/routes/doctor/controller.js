const prisma = require("../../utils/db");

const getAll = async (req, res) => {
  try {
    const data = await prisma.doctor.findMany();

    res.json({ data });
  } catch (error) {
    console.error({ error: error.message });

    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll };
