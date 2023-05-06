import { createMailSlurpAccount, MailSlurpAccount } from "./services/mailSlurp";

async function runCollection() {
  console.log("About to run first create mail slurp account");
  let account = await createMailSlurpAccount();
  console.log("Completed creating first mail slurp account", account);

  console.log("About to run second create mail slurp account");
  account = await createMailSlurpAccount();
  console.log("Completed creating second mail slurp account", account);
}

export default runCollection;
