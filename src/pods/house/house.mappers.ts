import { ObjectId } from "mongodb";
import * as model from "../../dals/house.model.js";
import * as apiModel from "./house.api-model.js";

export const mapHouseFromApiToModel = (
  house: model.House
): apiModel.HouseModel => ({
  _id: new ObjectId(house._id),
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
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.HouseAPIModel[] => houseList.map(mapHouseFromModelToApi);

export const mapHouseFromModelToApi = (
  house: model.House
): apiModel.HouseAPIModel => ({
  id: typeof house._id === "object" ? house._id.toHexString() : "",
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
});
