import axios from "axios";
import config from "./config";

export interface MailSlurpAccount {
  id: string;
  userId: string;
  created: string;
  createdAt: string;
  name: string;
  domainId: string;
  description: string;
  emailAddress: string;
  expiresAt: string;
  favourite: boolean;
  tags: [];
  teamAccess: boolean;
  inboxType: string;
  readOnly: boolean;
  virtualInbox: boolean;
}

export const createMailSlurpAccount = async () => {
  let data = <MailSlurpAccount>{};

  const params = new URLSearchParams({
    tags: config("MAILSLURP_TAGS"),
  }).toString();
  const url = config("MAILSLURP_URL") + "?" + params;
  const apiKey = config("MAILSLURP_API_KEY");

  const res = await axios.post(
    url,
    {},
    {
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  data = res.data;
  return data;
};

export default createMailSlurpAccount;
