import { HouseAPIModel } from "#pods/house/house.api-model.js";
import { House, Review } from "../../house.model.js";

export interface HouseRepository {
  findAll: (page?: number, pageSize?: number) => Promise<House[]>;
  findById(id: string): Promise<House>;
  saveHouse(house: House): Promise<House>;
  addReview(id: string, review: Review): Promise<House>;
}
