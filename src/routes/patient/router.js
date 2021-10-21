const express = require("express");
const { getAll, createPatientWithAppointment } = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.post("/", createPatientWithAppointment);

module.exports = router;
