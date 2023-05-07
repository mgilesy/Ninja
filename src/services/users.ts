import axios from "axios";
import config from "./config";

export interface externalUser {
  email: string;
  partyType: string;
  profile: {
    firstName: string;
    middlename: string;
    lastName: string;
  };
  address: {
    country: string;
    postalCode: string;
    region: string;
    locality: string;
    streetAddress: string;
  };
  emailVerified: boolean;
  lastLogin: string;
  accessLocked: boolean;
  password: boolean;
}

export interface createExternalUserParams {
  email: string;
  firstName: string;
  lastName: string;
}

export const createExternalUser = async (
  fnParams: createExternalUserParams
) => {
  let data = <externalUser>{};

  if (fnParams.email) data.email = fnParams.email;
  if (fnParams.firstName) data.profile.firstName = fnParams.firstName;
  if (fnParams.lastName) data.profile.lastName = fnParams.lastName;

  console.log("external user: ", data);

  const url = config("IGN_AUTH_URL");

  const res = await axios.post(url, data);

  data = res.data;
  return "hi";
};

export default createExternalUser;
