const express = require("express");
const { getAll, getDoctorWithAppointments } = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:id/appointments", getDoctorWithAppointments);

module.exports = router;
