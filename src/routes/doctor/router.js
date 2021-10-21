const express = require("express");
const {
  getAll,
  getAppointmentsForDoctor,
  getPracticesOfDoctorAppointments,
} = require("./controller");

const router = express.Router();

router.get("/", getAll);

router.get("/:id/appointments", getAppointmentsForDoctor);

router.get("/:id/practice", getPracticesOfDoctorAppointments);

module.exports = router;
