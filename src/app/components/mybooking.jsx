import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Mybooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <h2>My booking</h2>
    </div>
  );
};

export default Mybooking;
