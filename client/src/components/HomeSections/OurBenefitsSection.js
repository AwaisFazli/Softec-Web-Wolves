import React from "react";
import { FaCalendarDay } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";

const OurBenefitsSection = () => {
  return (
    <div className="bg-[#f4f8fb] flex px-[3%] py-14">
      <div className="w-1/2">
        <h1 className="text-mainDark text-6xl font-medium pb-4">
          Our Benefits
        </h1>
        <div className="h-4 w-64 rounded mb-16 bg-mainGreen" />
        <p className="text-2xl mb-8">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters.
        </p>
        <div className="flex flex-wrap gap-12">
          <div className="w-[300px]">
            <div className="flex items-center gap-3 mb-3">
              <FaCalendarDay size={32} color="#88b04b" />
              <h1 className="text-3xl font-semibold">Personal Schedule</h1>
            </div>
            <div className="text-xl opacity-80">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, making it look like readable
              English.
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex items-center gap-3 mb-3">
              <FaHouse size={32} color="#88b04b" />
              <h1 className="text-3xl font-semibold">Luxury Schedule</h1>
            </div>
            <div className="text-xl opacity-80">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, making it look like readable
              English.
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex items-center gap-3 mb-3">
              <FaScrewdriverWrench size={32} color="#88b04b" />
              <h1 className="text-3xl font-semibold">Safe & Confedential</h1>
            </div>
            <div className="text-xl opacity-80">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, making it look like readable
              English.
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex items-center gap-3 mb-3">
              <MdHealthAndSafety size={32} color="#88b04b" />
              <h1 className="text-3xl font-semibold">Professional Crew</h1>
            </div>
            <div className="text-xl opacity-80">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, making it look like readable
              English
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 flex gap-4">
        <div className="h-full flex flex-col gap-4 w-1/2">
          <img
            src="https://preview.colorlib.com/theme/flyplane/img/benefit/bp-1.jpg"
            alt=""
            className="h-[60%] w-full"
          />
          <img
            src="https://preview.colorlib.com/theme/flyplane/img/benefit/bp-2.jpg"
            alt=""
            className="h-[40%] w-full"
          />
        </div>
        <div className="h-full flex flex-col gap-4 w-1/2">
        <img
            src="https://preview.colorlib.com/theme/flyplane/img/benefit/bp-3.jpg"
            alt=""
            className="h-[60%] w-full object-contain"
          />
          <img
            src="https://preview.colorlib.com/theme/flyplane/img/benefit/bp-4.jpg"
            alt=""
            className="h-[40%] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OurBenefitsSection;
