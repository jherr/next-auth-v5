import { headers } from "next/headers";

export default async function WhoAmIRSC() {
  const { user } = await fetch("http://localhost:3000/api/whoami", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return <div className="mt-5">Who Am I (RSC): {user}</div>;
}
