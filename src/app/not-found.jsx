"use client";

import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-[#140c2b] to-slate-900 flex items-center justify-center px-6">
      
      <div className="absolute -top-30 -left-25 w-[320px] h-80 bg-purple-600/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-30 -right-25 w-[320px] h-80 bg-indigo-500/30 blur-3xl rounded-full"></div>

     
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[70px_70px" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        
        
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/10">
            <BiErrorCircle className="text-7xl text-purple-400" />
          </div>
        </div>

        
        <h1 className="text-7xl md:text-9xl font-black bg-linear-to-r from-indigo-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

      
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
          Page Not Found
        </h2>

      
        <p className="mt-5 text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

     
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:scale-105 transition-all duration-300"
          >
            <Home size={20} />
            Back Home
          </Link>

          <button
            onClick={() => history.back()}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Error Code: 404
        </p>
      </div>
    </section>
  );
};

export default NotFound;