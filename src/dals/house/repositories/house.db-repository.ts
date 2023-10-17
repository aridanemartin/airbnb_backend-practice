import { ObjectId } from "mongodb";
import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../index.js";
import { db } from "../../../core/servers/index.js";

export const housedbRepository: HouseRepository = {
  findAll: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = pageSize ?? 0;
    const result = await db
      ?.collection<House>("listingsAndReviews")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();
    return result;
  },
  findById: async (id: string) => {
    const result = await db
      ?.collection<House>("listingsAndReviews")
      .findOne({ _id: new ObjectId(id) });
    return result;
  },
  saveHouse: async (house: House) => {
    return await db?.collection<House>("listingsAndReviews").findOneAndUpdate(
      {
        _id: house._id,
      },
      { $set: house },
      { upsert: true, returnDocument: "after" }
    );
  },
  addReview: async (id: string, review: Review) => {
    return await db?.collection<House>("listingsAndReviews").findOneAndUpdate(
      {
        _id: new ObjectId(id),
      },
      {
        $push: {
          reviews: {
            _id: new ObjectId(),
            date: new Date(),
            reviewer_name: review.reviewerName,
            comments: review.comments,
          },
        },
      },
      { upsert: false, returnDocument: "after" }
    );
  },
};
