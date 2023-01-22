import express, { Application } from "express";
import GetDetailsHandler from "./services/get-details-handler.service";
import GetFullMenuHandler from "./services/get-menu-full-handler.service";

export const route: Application = express();

route.get("/restaurants/:restaurantId", GetDetailsHandler)
route.get("/restaurants/:restaurantId/menus/:menuName/full", GetFullMenuHandler) 