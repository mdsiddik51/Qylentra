import { getDoctorData } from '@/lib/data';
import { BookmarkFill } from '@gravity-ui/icons';
import { LockOpen } from '@gravity-ui/icons';
import { PersonMagnifier } from '@gravity-ui/icons';
import Link from 'next/link';
import TopCard from './topcard/retacard';
const Home = async () => {
  const data = await getDoctorData();
  const topDoctors = data.sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-50 via-emerald-50 to-cyan-50 min-h-screen flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 w-full">
        <di className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-white rounded-full px-5 py-2 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-linear-to-r from-emerald-500 to-cyan-500"></span>

              <p className="text-sm font-medium text-slate-700">
                Trusted Healthcare Platform
              </p>
            </div>
            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-slate-900">
              Your Health,
              <br />

              <span className="bg-linear-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-slate-500 max-w-xl mx-auto lg:mx-0">
              Book appointments with trusted doctors, get online
              consultations, and receive quality healthcare anytime.
            </p>
            <div className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start">
              <Link href="/allappointment" style={{ textDecoration: "none" }}>
                <button className="relative overflow-hidden rounded-sm bg-linear-to-r from-emerald-500 to-teal-600  text-[17px] font-extrabold text-white  transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:rounded-sm before:bg-[#212121] before:transition-all before:duration-300 before:content-[''] hover:text-[#e8e8e8] hover:before:w-full px-8 py-4">
                  <span className="relative z-10">All Appointment</span>
                </button>
              </Link>
              <Link href="/dashboard" style={{ textDecoration: "none" }}>
                <button className="relative overflow-hidden rounded-sm bg-linear-to-r from-emerald-500 to-teal-600  text-[17px] font-extrabold text-white  transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:rounded-sm before:bg-[#212121] before:transition-all before:duration-300 before:content-[''] hover:text-[#e8e8e8] hover:before:w-full px-8 py-4">
                  <span className="relative z-10">Dashboard</span>
                </button>
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-5 justify-center lg:justify-start">
              {[
                ["100+", "Expert Doctors"],
                ["25K+", "Happy Patients"],
                ["24/7", "Support"],
              ].map(([num, text], i) => (
                <div
                  key={i}
                  className="bg-white/70 backdrop-blur-xl border border-white rounded-3xl px-7 py-5 shadow-xl min-w-42.5"
                >
                  <h3 className="text-3xl font-bold text-slate-900">
                    {num}
                  </h3>

                  <p className="text-slate-500 mt-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-end">
            <div className="absolute -bottom-8 z-20 flex items-center gap-6 bg-white/85 backdrop-blur-2xl border border-white rounded-[32px] px-6 py-6 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <BookmarkFill />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800">
                    Easy
                  </h4>
                  <p className="text-sm text-slate-500">
                    Booking
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <PersonMagnifier />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800">
                    Verified
                  </h4>
                  <p className="text-sm text-slate-500">
                    Doctors
                  </p>
                </div>
              </div>
              <div className="w-px h-14 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">
                  <LockOpen />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800">
                    Secure &
                  </h4>
                  <p className="text-sm text-slate-500">
                    Reliable
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <img
                src="/banner.png"
                alt="Doctors"
                className="w-full max-w-155 object-contain drop-shadow-2xl"
              />
            </div>
            <div className="absolute top-6 right-0 lg:right-4 bg-white/80 backdrop-blur-xl border border-white rounded-3xl px-6 py-5 shadow-2xl z-20">
              <h3 className="text-2xl font-bold text-slate-900">
                4.9★
              </h3>

              <p className="text-slate-500">
                Patient Rating
              </p>
            </div>
            <div className="absolute bottom-24 left-0 lg:left-4 bg-white/80 backdrop-blur-xl border border-white rounded-3xl px-6 py-5 shadow-2xl z-20">
              <h3 className="text-2xl font-bold text-slate-900">
                30+
              </h3>
              <p className="text-slate-500">
                Specialists
              </p>
            </div>
          </div>
        </di>


        {/* top rated doctor  */}


        <div className='pt-20 text-center'>
          <div>
            <h2 className='pt-6 text-4xl font-bold'>Top Rated Doctors</h2>
            <h3 className='text-black/30'>Top-rated doctor providing expert medical care with compassion, precision, and years of trusted experience.</h3>
          </div>

          <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
            {
              topDoctors.map((doctor) => (
                <TopCard key={doctor._id} doctor={doctor} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;