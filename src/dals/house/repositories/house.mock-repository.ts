import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../../house.model.js";
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
  findAll: async (page, pageSize): Promise<House[]> => {
    const start = page * pageSize;
    const end = start + pageSize;
    return db.houses.slice(start, end);
  },
  findById: async (id: string): Promise<House | null> =>
    db.houses.find((house) => {
      console.log("findById");
      return house._id.toHexString() === id;
    }),
  saveHouse: async (house: House) =>
    db.houses.some((h) => h._id.toHexString() === house._id.toHexString())
      ? updateHouse(house)
      : insertHouse(house),
  addReview: async (id: string, review: Review) => {
    const house = db.houses.find((h) => h._id.toHexString() === id);
    if (house) {
      house.reviews.push({
        _id: new ObjectId(),
        date: new Date(),
        reviewer_name: review.reviewerName,
        comments: review.comments,
      });
    }
    return house;
  },
};
