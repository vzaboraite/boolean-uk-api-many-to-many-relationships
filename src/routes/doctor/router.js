const express = require("express");
const {
  getAll,
  getDoctorWithAppointments,
  getPracticesOfDoctorAppointments,
} = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:id/appointments", getDoctorWithAppointments);

router.get("/:id/practice", getPracticesOfDoctorAppointments);

module.exports = router;
