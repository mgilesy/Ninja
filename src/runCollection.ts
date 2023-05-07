import { createMailSlurpAccount, MailSlurpAccount } from "./services/mailSlurp";
import createExternalUser, { createExternalUserParams } from "./services/users";
import generateName from "./services/";

async function runCollection() {
  console.log("About to run first create mail slurp account");
  let account = await createMailSlurpAccount();
  console.log("Completed creating first mail slurp account", account);

  console.log("About to run create users");
  // let userParams = <createExternalUserParams>{};
  // userParams.email = account.emailAddress;
  // userParams.firstName = "Mike" +
  // console.log("Completed creating second mail slurp account", account);
  const name = await generateName("male");
  console.log("random name: ", name);
}

export default runCollection;
