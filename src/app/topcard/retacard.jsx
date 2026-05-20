import DetailsButton from "../details/page";

const TopCard = ({doctor}) => {
  return (
    
      <div className="w-full  group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_12px_35px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)] hover:-translate-y-1 transition-all duration-300">
        <div className="relative h-56 overflow-hidden">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold text-slate-800 shadow-lg">
            ⭐ {doctor.rating}
          </div>

          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-sm text-emerald-300 font-semibold tracking-wide uppercase">
              {doctor.specialty}
            </p>

            <h2 className="text-xl md:text-2xl font-bold mt-1 leading-tight">
              {doctor.name}
            </h2>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-3 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-100 mb-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center text-lg shadow-inner flex-shrink-0">
              🏥
            </div>

            <div className="overflow-hidden">
              <p className="text-xs text-slate-500">Hospital</p>

              <h3 className="text-sm font-semibold text-slate-700 truncate">
                {doctor.hospital}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-100 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-cyan-100 flex items-center justify-center text-lg shadow-inner flex-shrink-0">
              📍
            </div>

            <div className="overflow-hidden">
              <p className="text-xs text-slate-500">Location</p>

              <h3 className="text-sm font-semibold text-slate-700 truncate">
                {doctor.location}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4">
              <p className="text-xs text-slate-500">Experience</p>

              <h3 className="text-sm font-bold text-slate-800 mt-2">
                {doctor.experience}
              </h3>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-4 text-white shadow-md">
              <p className="text-xs text-white/80">Consultation Fee</p>

              <h3 className="text-sm font-bold mt-2">৳ {doctor.fee}</h3>
            </div>
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-slate-500">
                Available Time
              </p>

              <span className="text-xs font-bold text-emerald-600">Online</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {doctor.availability.map((time, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
          <div>
            <DetailsButton doctor={doctor}/>
          </div>
        </div>
      </div>
  );
};

export default TopCard;
