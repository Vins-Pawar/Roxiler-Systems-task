import { Router } from "express";
import {
    barchart,
    getAllProductTranscations,
    monthlyStats,
    piechart,
    searchProduct,
} from "../controllers/productTranscation.controller.js";

const router = Router();

router.route("/alltransactions").get(getAllProductTranscations);
router.route("/searchproduct").get(searchProduct);

router.route("/monthlystats/:month").get(monthlyStats);
router.route("/barchart/:month").get(barchart);
router.route("/piechart/:month").get(piechart);
export default router;
