import React, { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import ContactFormModal from "./ContactFormModal"; // adjust path if needed
import loanBanner from "../../src/assets/edumed-laon.jpg"; // adjust path
import workshopBanner from "../../src/assets/1747299951_Banner15.png";


const BannerWithCountdown = () => {
  const [isModalOpen, setModalOpen] = useState(false);
     const [isOpen, setIsOpen] = useState(false);

  const targetDate = new Date("2025-08-10T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = React.useState({});

  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full">
      {/* Top Banner */}
      <div className="relative mt-8 cursor-pointer" onClick={() => setModalOpen(true)}>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
  src={loanBanner}
  alt="Loan Banner"
  className="w-full h-full object-cover"
/>
        </div>
      </div>

      {/* Workshop Image */}
      {/* <div className="relative mt-8">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
  src={workshopBanner}
  alt="Workshop Banner"
  className="w-full h-full object-cover"
/>
        </div>
      </div> */}

      {/* Countdown Timer */}
      {/* <div className="relative z-10 flex justify-center mt-[-10px] sm:mt-[-60px]">
        <div className="bg-[#002d4b] text-white px-4 py-4 sm:px-6 sm:py-6 rounded-xl shadow-xl w-[95%] sm:w-4/5 md:w-4/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <CalendarDaysIcon className="w-12 h-12 sm:w-10 sm:h-10 text-gray-300" />
            <div>
              <p>
                Starting at <strong className="text-white">Aug 10, 2025</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 sm:gap-2">
            {["days", "hours", "minutes", "seconds"].map((key, index, arr) => (
              <div key={key} className="flex items-center gap-[2px]">
                <div className="bg-[#011f2e] px-2 py-[6px] sm:px-3 sm:py-2 rounded-md min-w-[35px]">
                  <div className="text-sm sm:text-base font-bold">
                    {timeLeft[key] ?? "00"}
                  </div>
                  <div className="text-[10px] sm:text-xs">{key}</div>
                </div>
                {index < arr.length - 1 && (
                  <span className="text-sm sm:text-base font-bold">:</span>
                )}
              </div>
            ))}
          </div>

          <button className="bg-white text-[#002d4b] px-4 py-1.5 rounded font-medium text-xs sm:text-sm hover:bg-gray-100 whitespace-nowrap">
            Enroll now
          </button>
        </div>
      </div> */}

      {/* Spacer */}
      <div className="pb-12 sm:pb-12"></div>

      {/* Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default BannerWithCountdown;
