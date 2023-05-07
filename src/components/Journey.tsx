import MailSlurp from "../components/MailSlurp";

const JourneyAccess = [
  { id: "Environment", name: "Environment", value: "au-ign-int-hoth" },
  {
    id: "AuthURL",
    name: "AuthURL",
    value: "https://hoth.api-int.ignitionx.space/auth/v3",
  },
  {
    id: "MailSlurpAPIKey",
    name: "MailSlurpAPIKey",
    value: "614808a1622546a3eb097036b7b8afb28e65cc29e3633b7e2910388cdaafc4df",
  },
  {
    id: "MailSlurpTimeout",
    name: "MailSlurpAPIKey",
    value: "20000",
  },
  {
    id: "ClientPassword",
    name: "ClientPassword",
    value: "Password@1",
  },
];

interface MailServer {
  MailBoxId: string;
}

interface JourneyUser {
  UserId: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  EmailId: string;
  ClientEmail: string;
  ActivationToken: string;
}

function Journey() {
  return (
    <>
      <MailSlurp />
    </>
  );
}

export default Journey;

// <ul className="list-group">
//   {JourneyAccess?.map((accessVar) => (
//     <li key={accessVar.id} className="list-group-item">
//       {accessVar.name}: {accessVar.value}
//     </li>
//   ))}
// </ul>;
