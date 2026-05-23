import { auth } from "@/lib/auth";
import { detailsData } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "Doctor Details | Qylentra",
  description:
    "Explore detailed doctor profiles, specialties, experience, availability, and appointment information on Qylentra to book the right healthcare professional easily.",
};

const Details = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const doctor = await detailsData(id, token);
  return (
    <div className="w-11/12 mx-auto">
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-emerald-50 px-4 py-10">
        <div className="w-full max-w-6xl">
          <div className="bg-white rounded-[30px] sm:rounded-[40px] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 sm:h-105 lg:h-full overflow-hidden flex items-center justify-center bg-black/5">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover object-center scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">
                  {doctor.rating}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <span className="bg-emerald-500 text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                  {doctor.specialty}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                  {doctor.name}
                </h1>

                <p className="mt-2 sm:mt-3 text-sm sm:text-lg text-gray-500">
                  {doctor.hospital}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                  <div className="bg-slate-100 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">
                      Experience
                    </p>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                      {doctor.experience}
                    </h3>
                  </div>

                  <div className="bg-slate-100 rounded-2xl p-4 sm:p-5">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">
                      Location
                    </p>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {doctor.location}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                    About Doctor
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {doctor.description}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                    Available Time
                  </h2>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {doctor.availability.map((time, index) => (
                      <span
                        key={index}
                        className="bg-emerald-100 text-emerald-700 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10">
                <Link href={`/topcard/${doctor._id}/booking`}>
                  <button className="w-full bg-emerald-500 hover:bg-emerald-600 transition text-white font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
