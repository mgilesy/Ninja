// import { useState, useEffect } from "react";
// import axios from "axios";

// const mailSlurpConfig = {
//   mailSlurpURL: "https://api.mailslurp.com/inboxes",
//   mailSlurpTags: "POSTMAN,au-ign-int-hoth",
//   mailSlurpAPIKey:
//     "614808a1622546a3eb097036b7b8afb28e65cc29e3633b7e2910388cdaafc4df",
// };
// export interface MailSlurpAccount {
//   id: string;
//   userId: string;
//   created: string;
//   createdAt: string;
//   name: string;
//   domainId: string;
//   description: string;
//   emailAddress: string;
//   expiresAt: string;
//   favourite: boolean;
//   tags: [];
//   teamAccess: boolean;
//   inboxType: string;
//   readOnly: boolean;
//   virtualInbox: boolean;
// }

// const useMailSlurp = (action: string) => {
//   const [data, setData] = useState<MailSlurpAccount>();

//   const params = new URLSearchParams({
//     tags: mailSlurpConfig.mailSlurpTags,
//   }).toString();

//   let mailURL = mailSlurpConfig.mailSlurpURL + "?" + params;

//   useEffect(() => {
//     axios
//       .post<MailSlurpAccount>(
//         mailURL,
//         {},
//         {
//           headers: {
//             "x-api-key": mailSlurpConfig.mailSlurpAPIKey,
//           },
//         }
//       )
//       //.then((res) => res.data);
//       .then((res) => {
//         setData(res.data);
//       });
//   }, [action]);

//   return [data];
// };

// export default useMailSlurp;
