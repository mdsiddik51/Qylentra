"use client";
import { useState } from "react";
import { Button, Link, Spinner, Avatar } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data, ispanding } = useSession();

  if (ispanding) {
    return (
      <div className="flex items-center gap-4">
        <Spinner />
      </div>
    );
  }

  const user = data?.user;

  return (
    <div className="pt-3 w-11/12 mx-auto pb-4">
      <nav className="px-5  ">
        <header className="flex h-16 items-center justify-between px-1 md:px-6">
          <div className="flex items-center gap-1 md:gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <div className="flex items-center  gap-2">
              <img src="/logo.png" alt="Qylentra" className="w-20 h-20" />
            </div>
          </div>

          <div>
            <ul className="hidden items-center text-white gap-4 md:flex">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/allappointment"> All Appointment</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>

          <div>
            {user ? (
              <div className="flex gap-4 ">
                <div className="flex items-center gap-4 shadow-md rounded-full">
                  <Avatar>
                    <Avatar.Image
                      className="w-full h-full object-cover"
                      alt={user.name}
                      src={user.image}
                    />
                    <Avatar.Fallback>{user.name.slice(0, 2)}</Avatar.Fallback>
                  </Avatar>
                </div>
                <div>
                  <Button
                    onClick={() => signOut()}
                    className="
                    bg-linear-to-r from-emerald-500 to-teal-600
                        text-white font-semibold 
                        px-6 py-3 rounded-sm 
                        shadow-sm hover:shadow-sm
                        transition-all duration-300 
                        hover:scale-105 
                        active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 "
                  >
                    SignOut
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 ">
                <Link href="/auth/login" style={{ textDecoration: "none" }}>
                  <button className="relative overflow-hidden rounded-sm bg-transparent px-4 py-2 text-[17px] font-extrabold text-[#212121]  transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:rounded-sm before:bg-[#212121] before:transition-all before:duration-300 before:content-[''] hover:text-[#e8e8e8] hover:before:w-full">
                    <span className="relative z-10">Login</span>
                  </button>
                </Link>
                <Link href="/auth/signup" style={{ textDecoration: "none" }}>
                  <Button
                    variant="tertiary"
                    className="
                    bg-linear-to-r from-emerald-500 to-teal-600
                        text-white font-semibold 
                        px-6 py-3 rounded-sm 
                        shadow-sm hover:shadow-sm
                        transition-all duration-300 
                        hover:scale-105 
                        active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 "
                  >
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </header>

        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/allappointment"> All Appointment</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
