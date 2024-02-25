import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HajjUmrahSection from "../components/HomeSections/HajjUmrahSection";
import OurBenefitsSection from "../components/HomeSections/OurBenefitsSection"
import SpotsSection from "../components/HomeSections/SpotsSection";
import UserChat from "../components/Chat/UserChat";
import Footer from "../components/Footer/";
import { useTranslation } from "react-i18next";


const HomePage = () => {
  const { t } = useTranslation('application', { keyPrefix: 'homepage' });
  return (
    <div className="overflow-hidden">
      <UserChat/>
      <div className="h-screen w-full relative">
        <Navbar />
        <img
          src="https://i.pinimg.com/originals/64/54/a6/6454a67eaa3758427a9bfae5f7c56114.jpg"
          alt=""
          className="h-full w-full object-cover absolute z-10 inset-0"
        />
        <div className="w-full h-full bg-black inset-0 absolute z-20 opacity-50" />
        <div className="absolute z-30 left-1/2 top-1/2 flex flex-col gap-6 items-center justify-center -translate-x-1/2 text-white">
          <h1 className="w-[90%] text-7xl text-center font-medium">{t('homeHeader')}</h1>
          <h1 className="w-[80%] text-2xl text-center mb-10">{t('homeSubtitle')}</h1>
          <button className="bg-white px-10 py-4 text-black text-2xl font-light hover:bg-mainGreen hover:font-semibold  transition-all">{t('homeButton')}</button>
        </div>
      </div>
      <HajjUmrahSection/>
      <SpotsSection/>
      <OurBenefitsSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
