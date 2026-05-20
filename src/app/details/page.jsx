import { Button } from "@heroui/react";
import Link from "next/link";

const DetailsButton = ({ doctor }) => {
  console.log(doctor);
  return (
    <div>
      <Link href='/details'>
        <Button
          variant="tertiary"
          className="
                bg-linear-to-r from-emerald-500 to-teal-600
                text-white font-semibold w-full
                 p-6 rounded-lg
                shadow-sm hover:shadow-sm
                transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 "
        >
          View Details
        </Button>
      </Link>
    </div>
  );
};

export default DetailsButton;
