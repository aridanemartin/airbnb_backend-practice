import { ObjectId } from "mongodb";
import { House } from "./house.model.js";

interface DB {
  houses: House[];
}

export const db: DB = {
  houses: [
    {
      _id: new ObjectId(),
      listing_url: "https://www.airbnb.com/rooms/10006546",
      name: "Ribeira Mock Charming Duplex",
      summary:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.",
      space:
        "Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit.",
      description:
        "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character. Privileged views of the Douro River and Ribeira square, our apartment offers the perfect conditions to discover the history and the charm of Porto. Apartment comfortable, charming, romantic and cozy in the heart of Ribeira. Within walking distance of all the most emblematic places of the city of Porto. The apartment is fully equipped to host 8 people, with cooker, oven, washing machine, dishwasher, microwave, coffee machine (Nespresso) and kettle. The apartment is located in a very typical area of the city that allows to cross with the most picturesque population of the city, welcoming, genuine and happy people that fills the streets with his outspoken speech and contagious with your sincere generosity, wrapped in a only parochial spirit. We are always available to help guests",
      neighborhood_overview:
        "In the neighborhood of the river, you can find several restaurants as varied flavors, but without forgetting the so traditional northern food. You can also find several bars and pubs to unwind after a day's visit to the magnificent Port. To enjoy the Douro River can board the boats that daily make the ride of six bridges. You can also embark towards Régua, Barca d'Alva, Pinhão, etc and enjoy the Douro Wine Region, World Heritage of Humanity. The Infante's house is a few meters and no doubt it deserves a visit. They abound grocery stores, bakeries, etc. to make your meals. Souvenir shop, wine cellars, etc. to bring some souvenirs.",
      notes:
        "Lose yourself in the narrow streets and staircases zone, have lunch in pubs and typical restaurants, and find the renovated cafes and shops in town. If you like exercise, rent a bicycle in the area and ride along the river to the sea, where it will enter beautiful beaches and terraces for everyone. The area is safe, find the bus stops 1min and metro line 5min. The bustling nightlife is a 10 min walk, where the streets are filled with people and entertainment for all. But Porto is much more than the historical center, here is modern museums, concert halls, clean and cared for beaches and surf all year round. Walk through the Ponte D. Luis and visit the different Caves of Port wine, where you will enjoy the famous port wine. Porto is a spoken city everywhere in the world as the best to be visited and savored by all ... natural beauty, culture, tradition, river, sea, beach, single people, typical food, and we are among those who best receive tourists, confirm! Come visit us and feel at ho",
      transit:
        "Transport: • Metro station and S. Bento railway 5min; • Bus stop a 50 meters; • Lift Guindais (Funicular) 50 meters; • Tuc Tuc-to get around the city; • Buses tourist; • Cycling through the marginal drive; • Cable car in Gaia, overlooking the Port (just cross the bridge).",
      access:
        'We are always available to help guests. The house is fully available to guests. We are always ready to assist guests. when possible we pick the guests at the airport.  This service transfer have a cost per person. We will also have service "meal at home" with a diverse menu and the taste of each. Enjoy the moment!',
      interaction: "Cot - 10 € / night Dog - € 7,5 / night",
      house_rules: "Make the house your home...",
      property_type: "House",
      room_type: "Entire home/apt",
      bed_type: "Real Bed",
      minimum_nights: "2",
      maximum_nights: "30",
      cancellation_policy: "moderate",
      last_scraped: new Date("2019-02-16T05:00:00.000Z"),
      calendar_last_scraped: new Date("2019-02-16T05:00:00.000Z"),
      first_review: new Date("2016-01-03T05:00:00.000Z"),
      last_review: new Date("2019-01-20T05:00:00.000Z"),
      accommodates: 8,
      bedrooms: 3,
      beds: 5,
      number_of_reviews: 51,
      bathrooms: "1.0",
      amenities: [
        "TV",
        "Cable TV",
        "Wifi",
        "Kitchen",
        "Paid parking off premises",
        "Smoking allowed",
        "Pets allowed",
        "Buzzer/wireless intercom",
        "Heating",
        "Family/kid friendly",
        "Washer",
        "First aid kit",
        "Fire extinguisher",
        "Essentials",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Pack ’n Play/travel crib",
        "Room-darkening shades",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Microwave",
        "Coffee maker",
        "Refrigerator",
        "Dishwasher",
        "Dishes and silverware",
        "Cooking basics",
        "Oven",
        "Stove",
        "Cleaning before checkout",
        "Waterfront",
      ],
      price: "80.00",
      security_deposit: "200.00",
      cleaning_fee: "35.00",
      extra_people: "15.00",
      guests_included: "6",
      images: {
        thumbnail_url: "",
        medium_url: "",
        picture_url:
          "https://a0.muscache.com/im/pictures/e4c6d978-a522-4f51-80d9-9a19a6f3a5d4.jpg?aki_policy=large",
        xl_picture_url: "",
      },
      host: {
        host_id: "9857",
        host_url: "https://www.airbnb.com/users/show/9857",
        host_name: "Alexander",
        host_location: "Porto, Porto District, Portugal",
        host_about:
          "I am a person who loves life. I love to travel, explore new places, new cultures, meeting different people. The experiences that we get and the people we meet in our travels, makes us better and more understanding people of the world. I l...",
        host_response_time: "within a few hours",
        host_thumbnail_url:
          "https://a0.muscache.com/im/users/9857/profile_picture/132726dd.jpg?aki_policy=profile_small",
        host_picture_url:
          "https://a0.muscache.com/im/users/9857/profile_picture/132726dd.jpg?aki_policy=profile_x_medium",
        host_neighbourhood: "Porto, Porto District, Portugal",
        host_is_superhost: true,
        host_has_profile_pic: true,
        host_identity_verified: true,
        host_listings_count: 3,
        host_total_listings_count: 3,
        host_verifications: [
          "email",
          "phone",
          "reviews",
          "jumio",
          "government_id",
        ],
      },
      address: {
        street: "Porto, Porto, Portugal",
        suburb: "São Nicolau",
        government_area: "Porto",
        market: "",
        country: "Portugal",
        country_code: "PT",
        location: {
          lat: 41.140577,
          lng: -8.611000000000001,
          is_location_exact: false,
        },
      },
      availability: {
        availability_30: 0,
        availability_60: 0,
        availability_90: 0,
        availability_365: 0,
      },
      review_scores: {
        review_scores_accuracy: 10,
        review_scores_cleanliness: 10,
        review_scores_checkin: 10,
        review_scores_communication: 10,
        review_scores_location: 10,
        review_scores_value: 10,
      },
      reviews: [],
      cancellation_policy_label: "Moderate",
      require_guest_profile_picture: false,
      require_guest_phone_verification: false,
      calculated_host_listings_count: 2,
      reviews_per_month: "0.91",
    },
    {
      _id: new ObjectId(),
      listing_url: "https://www.airbnb.com/rooms/10009999",
      name: "Horto flat with small garden",
      summary:
        "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants, museums and shops. Amazing view!",
      space:
        "Charming and quiet flat on a 1930's building with a beautiful garden and belvedere. One bedroom with king size bed + sofa-bed in the living room. Well equipped kitchen and bathroom. Within walking distance to museums, restaurants and shops. Excellent...",
      description:
        "One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants, museums and shops. Amazing view!",
      neighborhood_overview:
        "Right next to the Botanical Garden, Horto neighbourhood. 10 minutes walk to Lagoa neighbourhood and Rodrigo de Freitas lagoon. Buses to Copacabana, Ipanema, Lapa, Gloria, city centre and subway. Restaurants, bars, museums and shops...",
      notes: "Quiet and safe neighbourhood.",
      transit:
        "Easy for transport with buses and subway. Parking space in front of the building. Amazing view!",
      access: "Whole flat.",
      interaction: "I am available for any questions.",
      house_rules: "No parties, no loud music.",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      bed_type: "Real Bed",
      minimum_nights: "2",
      maximum_nights: "365",
      cancellation_policy: "moderate",
      last_scraped: new Date("2019-02-11T05:00:00.000Z"),
      calendar_last_scraped: new Date("2019-02-11T05:00:00.000Z"),
      first_review: new Date("2015-07-27T04:00:00.000Z"),
      last_review: new Date("2019-02-10T05:00:00.000Z"),
      accommodates: 4,
      bedrooms: 1,
      beds: 2,
      number_of_reviews: 67,
      bathrooms: "1.0",
      amenities: [
        "TV",
        "Cable TV",
        "Internet",
        "Wifi",
        "Kitchen",
        "Smoking allowed",
        "Pets allowed",
        "Hot tub",
        "Breakfast",
        "Family/kid friendly",
        "Washer",
        "Dryer",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Fire extinguisher",
        "Essentials",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "Self check-in",
        "Lockbox",
        "Private living room",
        "Private entrance",
        "Ethernet connection",
        "Microwave",
        "Coffee maker",
        "Refrigerator",
        "Dishes and silverware",
        "Cooking basics",
        "Oven",
        "Stove",
        "Long term stays allowed",
        "Patio or balcony",
        "Luggage dropoff allowed",
      ],
      price: "105.00",
      security_deposit: "500.00",
      cleaning_fee: "200.00",
      extra_people: "50.00",
      guests_included: "2",
      images: {
        thumbnail_url: "",
        medium_url: "",
        picture_url:
          "https://a0.muscache.com/im/pictures/40667331/0b2e8f97_original.jpg?aki_policy=large",
        xl_picture_url: "",
      },
      host: {
        host_id: "1812",
        host_url: "https://www.airbnb.com/users/show/1812",
        host_name: "Carlos",
        host_location: "Rio de Janeiro, Rio de Janeiro, Brazil",
        host_about:
          "I am a person who loves life. I love to travel, explore new places, new cultures, meeting different people. The experiences that we get and the people we meet in our travels, makes us better and more understanding people of the world. I l...",
        host_response_time: "within a few hours",
        host_thumbnail_url:
          "https://a0.muscache.com/im/users/1812/profile_picture/536x536_134917783561872942.jpg?aki_policy=profile_small",
        host_picture_url:
          "https://a0.muscache.com/im/users/1812/profile_picture/536x536_134917783561872942.jpg?aki_policy=profile_x_medium",
        host_neighbourhood: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
        host_is_superhost: true,
        host_has_profile_pic: true,
        host_identity_verified: true,
        host_listings_count: 4,
        host_total_listings_count: 4,
        host_verifications: [
          "email",
          "phone",
          "reviews",
          "jumio",
          "government_id",
        ],
      },
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
        suburb: "Jardim Botânico",
        government_area: "Rio de Janeiro",
        market: "",
        country: "Brazil",
        country_code: "BR",
        location: {
          lat: -22.965919,
          lng: -43.225219,
          is_location_exact: false,
        },
      },
      availability: {
        availability_30: 0,
        availability_60: 0,
        availability_90: 0,
        availability_365: 0,
      },
      review_scores: {
        review_scores_accuracy: 10,
        review_scores_cleanliness: 10,
        review_scores_checkin: 10,
        review_scores_communication: 10,
        review_scores_location: 10,
        review_scores_value: 10,
      },
      reviews: [],
      cancellation_policy_label: "Moderate",
      require_guest_profile_picture: false,
      require_guest_phone_verification: false,
      calculated_host_listings_count: 1,
      reviews_per_month: "1.31",
    },
    {
      _id: new ObjectId(),
      listing_url: "https://www.airbnb.com/rooms/1001415",
      name: "Nice and cozy duplex",
      summary:
        "One bedroom in a two bedroom duplex located in the heart of Rio's Lapa district. Lapa is a bohemian neighborhood, bars, restaurants and metro steps away and Santa Teresa neighborhood is a short walk away.",
      space:
        "The apartment is well lit with plenty of space, in a quiet street. It's a two bedroom duplex, living room, kitchen and a small service area in the back with washing machine. One bedroom is for rent. There's a doble bed, fan and a big wardrobe. The room is big and comfortable.",
      description:
        "One bedroom in a two bedroom duplex located in the heart of Rio's Lapa district. Lapa is a bohemian neighborhood, bars, restaurants and metro steps away and Santa Teresa neighborhood is a short walk away.",
      neighborhood_overview:
        "Lapa is a vibrant neighborhood. There's always something to do. If you want to experience Rio's bohemian life, Lapa is the place to be. There's samba, forró, choro and sertanejo. You can go to cultural spaces like Sala Cecília Meireles and Circo Voador. Lapa has a bunch of restaurants and bars, you can eat and drink in a kiosk by the bay. Lapa is close to Santa Teresa, another interesting neighborhood (10 minutes walk). Santa Teresa is an old neighborhood on the hills of Rio, with narrow streets, old houses and a great view of the city. There's also a couple of cultural spaces, like Centro Cultural Laurinda Santos Lobo and Parque das Ruínas. Lapa is very close to downtown, 10 minutes by bus.",
      notes:
        "The apartment is next to the metro station (Cinelândia) and bus stops. There's a cab stop in front of the building.",
      transit:
        "The apartment is next to the metro station (Cinelândia) and bus stops. There's a cab stop in front of the building.",
      access:
        "Kitchen, living room, service area and bathroom. Guests can cook.",
      interaction: "I'm always available to help with any questions.",
      house_rules: "Just be polite and respectful.",
      property_type: "Apartment",
      room_type: "Private room",
      bed_type: "Real Bed",
      minimum_nights: "1",
      maximum_nights: "10",
      cancellation_policy: "moderate",
      last_scraped: new Date("2019-02-13T05:00:00.000Z"),
      calendar_last_scraped: new Date("2019-02-13T05:00:00.000Z"),
      first_review: new Date("2014-03-23T04:00:00.000Z"),
      last_review: new Date("2019-02-12T05:00:00.000Z"),
      accommodates: 2,
      bedrooms: 1,
      beds: 1,
      number_of_reviews: 23,
      bathrooms: "1.0",
      amenities: [
        "TV",
        "Internet",
        "Wifi",
        "Kitchen",
        "Elevator",
        "Smoking allowed",
        "Pets allowed",
        "Doorman",
        "Family/kid friendly",
        "Washer",
        "Dryer",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Fire extinguisher",
        "Essentials",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "Self check-in",
        "Lockbox",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Microwave",
        "Coffee maker",
        "Refrigerator",
        "Dishes and silverware",
        "Cooking basics",
        "Oven",
        "Stove",
        "Long term stays allowed",
      ],
      price: "40.00",
      security_deposit: "100.00",
      cleaning_fee: "50.00",
      extra_people: "20.00",
      guests_included: "1",
      images: {
        thumbnail_url: "",
        medium_url: "",
        picture_url:
          "https://a0.muscache.com/im/pictures/1df55451-87d5-4009-9242-01d3bf7ebeb6.jpg?aki_policy=large",
        xl_picture_url: "",
      },
      host: {
        host_id: "22795",
        host_url: "https://www.airbnb.com/users/show/22795",
        host_name: "Alfredo",
        host_location: "Rio de Janeiro, Rio de Janeiro, Brazil",
        host_about:
          "I am a person who loves life. I love to travel, explore new places, new cultures, meeting different people. The experiences that we get and the people we meet in our travels, makes us better and more understanding people of the world. I l...",
        host_response_time: "within a few hours",
        host_thumbnail_url:
          "https://a0.muscache.com/im/users/22795/profile_picture/349x349_1327245637.jpg?aki_policy=profile_small",
        host_picture_url:
          "https://a0.muscache.com/im/users/22795/profile_picture/349x349_1327245637.jpg?aki_policy=profile_x_medium",
        host_neighbourhood: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
        host_is_superhost: true,
        host_has_profile_pic: true,
        host_identity_verified: true,
        host_listings_count: 3,
        host_total_listings_count: 3,
        host_verifications: [
          "email",
          "phone",
          "reviews",
          "jumio",
          "government_id",
        ],
      },
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
        suburb: "Lapa",
        government_area: "Rio de Janeiro",
        market: "",
        country: "Brazil",
        country_code: "BR",
        location: {
          lat: -22.911217,
          lng: -43.180306,
          is_location_exact: false,
        },
      },
      availability: {
        availability_30: 0,
        availability_60: 0,
        availability_90: 0,
        availability_365: 0,
      },
      review_scores: {
        review_scores_accuracy: 9,
        review_scores_cleanliness: 9,
        review_scores_checkin: 9,
        review_scores_communication: 9,
        review_scores_location: 9,
        review_scores_value: 9,
      },
      reviews: [],
      cancellation_policy_label: "Moderate",
      require_guest_profile_picture: false,
      require_guest_phone_verification: false,
      calculated_host_listings_count: 1,
      reviews_per_month: "0.47",
    },
    {
      _id: new ObjectId(),
      listing_url: "https://www.airbnb.com/rooms/1001590",
      name: "Stylish Santa Teresa 2",
      summary:
        "Cozy apartment in the heart of Santa Teresa, the charming neighborhood in the hills of Rio. Quiet location in a closed condominium, with 24h security. Equipped with everything you need, including AC and Wi-Fi. Open-minded and welcoming host.",
      space:
        "You'll be renting the whole apartment, including bedroom, living room, bathroom, kitchen and laundry area. The apartment is very cozy and comfortable. It has a double bed in the bedroom, a sofa bed in the living room, and all the amenities you'll need for your stay. The kitchen is fully equipped, and the laundry area has a washing machine that you can use. The apartment also has air conditioning and Wi-Fi. It's a perfect choice for couples or solo travelers who want to experience the charm of Santa Teresa.",
      description:
        "Cozy apartment in the heart of Santa Teresa, the charming neighborhood in the hills of Rio. Quiet location in a closed condominium, with 24h security. Equipped with everything you need, including AC and Wi-Fi. Open-minded and welcoming host.",
      neighborhood_overview:
        "Santa Teresa is a charming and bohemian neighborhood located on the hills of Rio de Janeiro. Known for its narrow winding streets, colonial-style houses, and cultural scene, Santa Teresa offers a unique experience for visitors. You can find art studios, cultural centers, restaurants, and bars scattered throughout the neighborhood. It's a great place to explore on foot and immerse yourself in Rio's artistic and historical heritage. Don't miss the Parque das Ruínas, a cultural space with a stunning view of the city. Santa Teresa is also famous for its carnival celebrations, with traditional street parties and parades that attract people from all over the world.",
      notes:
        "The apartment is located in a closed condominium with 24h security, providing a safe and peaceful environment for guests. Please respect the neighbors and the quiet atmosphere of the neighborhood. Parties and loud music are not allowed in the apartment.",
      transit:
        "Santa Teresa is well connected to other parts of Rio de Janeiro by public transportation. You can easily reach downtown, Lapa, and the beaches of Copacabana and Ipanema by bus or taxi. The nearest metro station is Glória, which is about 10 minutes away by taxi or bus.",
      access:
        "Guests will have access to the entire apartment, including the bedroom, living room, bathroom, kitchen, and laundry area. The apartment is fully equipped for a comfortable stay.",
      interaction:
        "I will be available to assist guests throughout their stay. Whether you need tips on places to visit, recommendations for restaurants, or help with any issues in the apartment, feel free to reach out to me. I want to make sure you have a pleasant and enjoyable stay in Santa Teresa.",
      house_rules:
        "Please treat the apartment with care and respect. Smoking is not allowed inside the apartment. Pets are not allowed. Parties and loud music are not permitted in the apartment. Please be mindful of the neighbors and the peaceful atmosphere of the condominium.",
      property_type: "Apartment",
      room_type: "Entire home/apt",
      bed_type: "Real Bed",
      minimum_nights: "2",
      maximum_nights: "30",
      cancellation_policy: "strict_14_with_grace_period",
      last_scraped: new Date("2019-02-13T05:00:00.000Z"),
      calendar_last_scraped: new Date("2019-02-13T05:00:00.000Z"),
      first_review: new Date("2013-04-01T04:00:00.000Z"),
      last_review: new Date("2018-12-15T05:00:00.000Z"),
      accommodates: 3,
      bedrooms: 1,
      beds: 2,
      number_of_reviews: 103,
      bathrooms: "1.0",
      amenities: [
        "TV",
        "Cable TV",
        "Internet",
        "Wifi",
        "Air conditioning",
        "Kitchen",
        "Elevator",
        "Smoke detector",
        "Carbon monoxide detector",
        "First aid kit",
        "Fire extinguisher",
        "Essentials",
        "Shampoo",
        "Hangers",
        "Hair dryer",
        "Iron",
        "Laptop friendly workspace",
        "Self check-in",
        "Lockbox",
        "Hot water",
        "Bed linens",
        "Extra pillows and blankets",
        "Microwave",
        "Coffee maker",
        "Refrigerator",
        "Dishes and silverware",
        "Cooking basics",
        "Oven",
        "Stove",
      ],
      price: "70.00",
      security_deposit: "150.00",
      cleaning_fee: "50.00",
      extra_people: "20.00",
      guests_included: "1",
      images: {
        thumbnail_url: "",
        medium_url: "",
        picture_url:
          "https://a0.muscache.com/im/pictures/6f9641bf-7a5f-4045-8708-5c2c8adffe8f.jpg?aki_policy=large",
        xl_picture_url: "",
      },
      host: {
        host_id: "37863",
        host_url: "https://www.airbnb.com/users/show/37863",
        host_name: "Marcela",
        host_location: "Rio de Janeiro, Rio de Janeiro, Brazil",
        host_about:
          "I am a person who loves life. I love to travel, explore new places, new cultures, meeting different people. The experiences that we get and the people we meet in our travels, makes us better and more understanding people of the world. I l...",
        host_response_time: "within an hour",
        host_thumbnail_url:
          "https://a0.muscache.com/im/users/37863/profile_picture/349x349_1349222134.jpg?aki_policy=profile_small",
        host_picture_url:
          "https://a0.muscache.com/im/users/37863/profile_picture/349x349_1349222134.jpg?aki_policy=profile_x_medium",
        host_neighbourhood: "Rio de Janeiro, State of Rio de Janeiro, Brazil",
        host_is_superhost: true,
        host_has_profile_pic: true,
        host_identity_verified: true,
        host_listings_count: 4,
        host_total_listings_count: 4,
        host_verifications: [
          "email",
          "phone",
          "reviews",
          "jumio",
          "government_id",
        ],
      },
      address: {
        street: "Rio de Janeiro, Rio de Janeiro, Brazil",
        suburb: "Santa Teresa",
        government_area: "Rio de Janeiro",
        market: "",
        country: "Brazil",
        country_code: "BR",
        location: {
          lat: -22.920748,
          lng: -43.184273,
          is_location_exact: false,
        },
      },
      availability: {
        availability_30: 0,
        availability_60: 0,
        availability_90: 0,
        availability_365: 0,
      },
      review_scores: {
        review_scores_accuracy: 10,
        review_scores_cleanliness: 10,
        review_scores_checkin: 10,
        review_scores_communication: 10,
        review_scores_location: 10,
        review_scores_value: 10,
      },
      reviews: [],
      cancellation_policy_label: "Strict",
      require_guest_profile_picture: false,
      require_guest_phone_verification: false,
      calculated_host_listings_count: 1,
      reviews_per_month: "1.02",
    },
  ],
};
