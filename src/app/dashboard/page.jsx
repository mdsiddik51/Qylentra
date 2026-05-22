import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DashboardClient from "../components/dasboard";
import { DeletUser } from "@/lib/actions";

const Dashboard = async () => {
  // Get session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Get token
  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenData?.token;
  const user = session?.user;
  const response = await fetch(
    `http://localhost:8080/appointments/user/${user?.id}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const data = await response.json();
  let appointments = data || [];

  return (
    <div>
      <DashboardClient DeletUser={DeletUser}  user={user} appointments={appointments} />
    </div>
  );
};

export default Dashboard;
