const express = require("express");
const {
  showHomepage,
  query,
  showDashboard,
  showDetails,
} = require("../controller/userController");

const router = express.Router();

router.get("/", query);

router.get("/:userid", showHomepage);

router.get("/dashboard", showDashboard);

router.get("/detail", showDetails);

module.exports = router;
