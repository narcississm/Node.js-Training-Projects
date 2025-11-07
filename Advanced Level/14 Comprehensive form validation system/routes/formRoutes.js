const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");
const validateForm = require("../middlewares/validateForm");

router.post("/", validateForm, formController.submitForm);
router.get("/", formController.getForms);

module.exports = router;