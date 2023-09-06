import Link from "next/link";

function ClientPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The client page</h1>
      {/* <ul>
        <li>
          <Link href="client/max">Maximilian</Link>
        </li>
        <li>
          <Link href="client/manuel">Manuel</Link>
        </li>
      </ul> */}
      {clients.map((client) => (
        <ul key={client.id}>
          <li>
            <Link
              href={{
                pathname: "/client/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default ClientPage;
