import useMailSlurp from "../hooks/useMailSlurp";

function MailSlurp() {
  const [mailAccount] = useMailSlurp("create");

  return (
    <div className="container p-3">
      <div>
        <h1>Email Account Create</h1>
        {mailAccount && (
          <div className="mt-3">
            <strong>Output:</strong>
            <br />
            <pre>{JSON.stringify(mailAccount, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default MailSlurp;
