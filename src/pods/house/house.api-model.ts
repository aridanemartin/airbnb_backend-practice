import { ObjectId } from "mongodb";

export interface HouseAPIModel {
  id: string;
  name: string;
  description: string;
  images: {
    thumbnail_url: string;
    medium_url: string;
    picture_url: string;
    xl_picture_url: string;
  };
  address: {
    street: string;
    suburb: string;
    government_area: string;
    market: string;
    country: string;
    country_code: string;
    location: {
      lat: number;
      lng: number;
      is_location_exact: boolean;
    };
  };
  bedrooms: number;
  beds: number;
  bathrooms: string;
  last5reviews: Array<{
    id: string;
    comment: string;
    userId: string;
    createdAt: string;
  }>;
}

export interface HouseModel {
  _id: ObjectId;
  name: string;
  description: string;
  images: {
    thumbnail_url: string;
    medium_url: string;
    picture_url: string;
    xl_picture_url: string;
  };
  address: {
    street: string;
    suburb: string;
    government_area: string;
    market: string;
    country: string;
    country_code: string;
    location: {
      lat: number;
      lng: number;
      is_location_exact: boolean;
    };
  };
  bedrooms: number;
  beds: number;
  bathrooms: string;
  last5reviews: Array<{
    id: string;
    comment: string;
    userId: string;
    createdAt: string;
  }>;
}
