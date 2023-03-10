import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getHotels } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter.all("/*", authenticateToken).get("/", getHotels).get("/:hotelId");

export { hotelsRouter };
