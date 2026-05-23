import React from "react";
import Appointment from "../components/Appointment";
export const metadata = {
  title: "All Appointments | Qylentra",
  description:
    "View and manage all your doctor appointments in one place. Check booking status, upcoming schedules, and appointment history easily with Qylentra.",
};
export default function AllAppointment() {
  return (
    <div>
      <Appointment />
    </div>
  );
}
