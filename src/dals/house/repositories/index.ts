import { houseMockRepository } from "./house.mock-repository.js";
import { housedbRepository } from "./house.db-repository.js";
import { envConstants } from "#core/constants/index.js";

export const houseRepository = housedbRepository;
// export const houseRepository = envConstants.isApiMock
//   ? houseMockRepository
//   : housedbRepository;
