import { houseRepository } from "#dals/house/index.js";
import { Router } from "express";
import { mapHouseFromApiToModel } from "./house.mappers.js";

export const housesApi = Router();

housesApi
  .get("/", async (req, res) => {
    try {
      const houseList = await houseRepository.findAll();

      res.send(houseList);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.findById(id);
      if (house) {
        res.send(mapHouseFromApiToModel(house));
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post("/", async (req, res) => {
    try {
      const house = await houseRepository.create(req.body);
      res.send(house);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .post("/:id", async (req, res) => {
    try {
      const { id } = req.params;

      if (await houseRepository.findById(id)) {
        const house = mapHouseFromApiToModel({ ...req.body, id });
        console.log("====house===>", house);
        await houseRepository.saveHouse(house);
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  })
  .delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const house = await houseRepository.findById(id);
      if (house) {
        await houseRepository.delete(id);
        res.send(mapHouseFromApiToModel(house));
      } else {
        res.sendStatus(404);
      }
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
