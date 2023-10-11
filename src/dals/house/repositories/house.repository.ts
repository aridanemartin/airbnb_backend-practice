import { House } from "../../house.model.js";

export interface HouseRepository {
  findAll(): Promise<House[]>;
  findById(id: string): Promise<House | null>;
  saveHouse(house: House): Promise<House>;
  delete(id: string): Promise<void>;
}
