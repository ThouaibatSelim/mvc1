const profilController = require("../controllers/profil");

router.get("/profil", profilController.profilView);