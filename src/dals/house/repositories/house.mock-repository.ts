import { HouseRepository } from "./house.repository.js";
import { House } from "../../house.model.js";
import { db } from "../../mock-data.js";
import { ObjectId } from "mongodb";

const insertHouse = async (house: House): Promise<House> => {
  const _id = new ObjectId();
  const newHouse = { ...house, _id };
  db.houses.push(newHouse);
  return newHouse;
};

const updateHouse = async (house: House): Promise<House> => {
  db.houses.map((h) => {
    h._id.toHexString() === house._id.toHexString() ? { ...h, ...house } : h;
  });
  return house;
};

export const houseMockRepository: HouseRepository = {
  findAll: async (): Promise<House[]> => db.houses,
  findById: async (id: string): Promise<House | null> =>
    db.houses.find((house) => {
      console.log("====>", house._id.toHexString(), id);
      return house._id.toHexString() === id;
    }),
  saveHouse: async (house: House) =>
    db.houses.some((h) => h._id.toHexString() === house._id.toHexString())
      ? updateHouse(house)
      : insertHouse(house),
  delete: async (id) => {
    db.houses = db.houses.filter((house) => house._id.toHexString() !== id);
  },
};
