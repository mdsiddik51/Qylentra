import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import DashboardClient from "../components/dasboard";
import { DeletUser, updateAppointment } from "@/lib/actions";

export const metadata = {
  title: "Dashboard | Qylentra",
  description:
    "Access your Qylentra dashboard to manage doctor appointments, track schedules, view booking history, and stay connected with your healthcare services in one place.",
};

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
    `https://qylentra-server.vercel.app/appointments/user/${user?.id}`,
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
      <DashboardClient
        DeletUser={DeletUser}
        user={user}
        appointments={appointments}
        updateAppointment={updateAppointment}
      />
    </div>
  );
};

export default Dashboard;
