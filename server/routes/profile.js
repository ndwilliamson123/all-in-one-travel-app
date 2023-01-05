const router = require("express").Router();
const profileController = require("../controllers/profileController");

router.get("/", (req, res) => {
  profileController.getProfileDataByUserId(req, res);
});

router.get("/update", (req, res) => {
    profileController.setProfileDataByUserId(req, res);
})

router.get("/update/password", (req, res) => {
    profileController.updatePassword(req, res);
})

module.exports = router;
