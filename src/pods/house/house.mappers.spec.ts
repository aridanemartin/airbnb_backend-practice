import { ObjectId } from "mongodb";
import { db } from "../../dals/mock-data.js";
import {
  mapHouseFromApiToModel,
  mapHouseFromModelToApi,
  mapHouseListFromModelToApi,
} from "./house.mappers.js";

describe("house mappers", () => {
  describe("mapHouseFromApiToModel", () => {
    it("should return a house with the same values", () => {
      const inputHouse = db.houses[0];
      const expectedHouse = {
        _id: expect.any(ObjectId),
        name: inputHouse.name,
        description: inputHouse.description,
        images: inputHouse.images,
        address: inputHouse.address,
        bedrooms: inputHouse.bedrooms,
        beds: inputHouse.beds,
        bathrooms: inputHouse.bathrooms,
        last5reviews: expect.any(Array),
      };

      // Act
      const result = mapHouseFromApiToModel(inputHouse);

      // Assert
      expect(result).toEqual(expectedHouse);
    });
  });

  describe("mapHouseListFromModelToApi", () => {
    it("should return a house list with the same values", () => {
      const inputHouseList = db.houses;
      const expectedHouseList = inputHouseList.map((house) => ({
        id: house._id.toHexString(),
        name: house.name,
        description: house.description,
        images: house.images,
        address: house.address,
        bedrooms: house.bedrooms,
        beds: house.beds,
        bathrooms: house.bathrooms,
        last5reviews: house?.reviews?.slice(0, 5).map((review) => ({
          id: review._id,
          comment: review.comments,
          userId: review.userId,
          createdAt: review.createdAt,
        })),
      }));

      // Act
      const result = mapHouseListFromModelToApi(inputHouseList);

      // Assert
      expect(result).toEqual(expectedHouseList);
    });
  });

  describe("mapHouseFromModelToApi", () => {
    it("should return a house with the same values", () => {
      const inputHouse = db.houses[0];
      const expectedHouse = {
        id: expect.any(String),
        name: inputHouse.name,
        description: inputHouse.description,
        images: inputHouse.images,
        address: inputHouse.address,
        bedrooms: inputHouse.bedrooms,
        beds: inputHouse.beds,
        bathrooms: inputHouse.bathrooms,
        last5reviews: expect.any(Array),
      };

      // Act
      const result = mapHouseFromModelToApi(inputHouse);

      // Assert
      expect(result).toEqual(expectedHouse);
    });
  });
});
