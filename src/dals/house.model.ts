import { ObjectId } from "mongodb";

export interface House {
  _id: ObjectId;
  listing_url: string;
  name: string;
  summary: string;
  space: string;
  description: string;
  neighborhood_overview: string;
  notes: string;
  transit: string;
  access: string;
  interaction: string;
  house_rules: string;
  property_type: string;
  room_type: string;
  bed_type: string;
  minimum_nights: string;
  maximum_nights: string;
  cancellation_policy: string;
  last_scraped: Date;
  calendar_last_scraped: Date;
  first_review: Date;
  last_review: Date;
  accommodates: number;
  bedrooms: number;
  beds: number;
  number_of_reviews: number;
  bathrooms: string;
  amenities: string[];
  price: string;
  security_deposit: string;
  cleaning_fee: string;
  extra_people: string;
  guests_included: string;
  images: {
    thumbnail_url: string;
    medium_url: string;
    picture_url: string;
    xl_picture_url: string;
  };
  host: {
    host_id: string;
    host_url: string;
    host_name: string;
    host_location: string;
    host_about: string;
    host_response_time: string;
    host_thumbnail_url: string;
    host_picture_url: string;
    host_neighbourhood: string;
    host_is_superhost: boolean;
    host_has_profile_pic: boolean;
    host_identity_verified: boolean;
    host_listings_count: number;
    host_total_listings_count: number;
    host_verifications: string[];
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
  availability: {
    availability_30: number;
    availability_60: number;
    availability_90: number;
    availability_365: number;
  };
  review_scores: {
    review_scores_accuracy: number;
    review_scores_cleanliness: number;
    review_scores_checkin: number;
    review_scores_communication: number;
    review_scores_location: number;
    review_scores_value: number;
  };
  reviews: any[]; // You can define a specific interface for reviews if needed
  cancellation_policy_label: string;
  require_guest_profile_picture: boolean;
  require_guest_phone_verification: boolean;
  calculated_host_listings_count: number;
  reviews_per_month: string;
}
