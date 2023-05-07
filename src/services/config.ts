const config = (configReq: string) => {
  switch (configReq) {
    case "MAILSLURP_URL":
      return import.meta.env.VITE_MAILSLURP_URL as string;
      break;

    case "MAILSLURP_TAGS":
      return import.meta.env.VITE_MAILSLURP_TAGS as string;
      break;
    case "MAILSLURP_API_KEY":
      return import.meta.env.VITE_MAILSLURP_API_KEY as string;
      break;

    case "IGN_AUTH_URL":
      return import.meta.env.VITE_IGN_AUTH_URL as string;
      break;

    default:
      console.log("Missing Config KEY: ", configReq);
      return "";
      break;
  }
};

export default config;
