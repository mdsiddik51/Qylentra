"use client";
import "../globals.css";
import { useEffect, useState } from "react";
import { getDoctorData } from "@/lib/data";
import { Label, SearchField } from "@heroui/react";
import DoctorCard from "../components/doctorcard";
const appointment = () => {
  const [doctordata, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const data = await getDoctorData();
      setDoctors(data);
    };
    fetchDoctors();
  }, []);

  const doctors = doctordata.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()),
  );
  if (doctordata.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="pt-6 text-4xl font-bold">All Appointment</h2>
        <h3 className="text-black/30 pt-5">
          Book appointments with experienced doctors, view specialties, check
          availability, and receive quality healthcare consultation with ease.
        </h3>
      </div>
      <div className="flex justify-center md:justify-start pt-8 pb-8">
        <SearchField name="search">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search doctor by name..."
            />
            <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>
      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
        ;
      </div>
    </div>
  );
};

export default appointment;
