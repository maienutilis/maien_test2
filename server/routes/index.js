import express from "express";
const router = express.Router();

import { getTerms, getTypes, addTerms} from '../controllers'

router.get("/terms/:type", getTerms);
router.get("/types", getTypes);
router.post("/add-terms", addTerms);

module.exports = router;