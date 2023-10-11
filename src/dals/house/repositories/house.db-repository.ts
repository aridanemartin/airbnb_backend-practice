import { ObjectId } from "mongodb";
import { HouseRepository } from "./house.repository.js";
import { House } from "../index.js";
import { db } from "../../../core/servers/index.js";

export const housedbRepository = {
  findAll: async () => {
    const result = await db?.collection("listingsAndReviews").find().toArray();
    console.log(result);
    return await db.collection("listingAndReviews").find().toArray();
  },
};

// getBook: async (id: string) => {
//   return await getBookContext().findOne({
//     _id: new ObjectId(id),
//   });
// },
// saveBook: async (book: Book) => {
//   return await getBookContext().findOneAndUpdate(
//     {
//       _id: book._id,
//     },
//     { $set: book },
//     { upsert: true, returnDocument: 'after' }
//   );
// },
// deleteBook: async (id: string) => {
//   const { deletedCount } = await getBookContext().deleteOne({
//     _id: new ObjectId(id),
//   });
//   return deletedCount === 1;
// },
