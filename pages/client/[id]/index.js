import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/client/[id]/[clientprojects]",
      query: {
        id: "max",
        clientprojects: "projectA",
      },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Clients</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
