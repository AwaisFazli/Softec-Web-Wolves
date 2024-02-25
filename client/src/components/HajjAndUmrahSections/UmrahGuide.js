import React from "react";
import Navbar from "../Navbar/Navbar";

const UmrahGuide = () => {
  return (
    <div>
      <div className="h-[80vh] w-full relative">
        <Navbar />
        <img
          src="https://hajjumrahplanner.com/wp-content/uploads/banners-home/banner11.jpg"
          alt=""
          className="h-full w-full object-cover absolute z-10 inset-0"
        />
        <div className="w-full h-full bg-black inset-0 absolute z-20 opacity-50" />
        <div className="absolute z-30 left-1/2 top-1/2 flex flex-col gap-6 items-center justify-center -translate-x-1/2 text-white">
          <h1 className="w-[90%] text-7xl text-center font-medium">
            Umrah Guide
          </h1>
          <h1 className="w-[80%] text-2xl text-center mb-10">
            Umrah can be performed throughout the year and also forms an
            integral part of Hajj itself. Find out how to perform Umrah here.
          </h1>
        </div>
      </div>
      <div className="flex p-8 justify-between">
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold mb-4">Introduction:</h1>
          <p className="text-xl font-normal">
            Umrah (Arabic: عمرة‎), sometimes referred to as the ‘lesser’ or
            ‘minor’ pilgrimage, consists of carrying out a set of rites in the
            precinct of Masjid al-Haram in Makkah. It consists of four essential
            practices and can be carried out at any time of the year.
            Linguistically, Umrah means to visit a particular place. In terms of
            Shariah, Umrah comprises of passing the Miqat in the state of Ihram,
            performing Tawaf of the Kaaba, doing Sa’i of Safa and Marwa and
            carrying out Halq (shaving) or Taqsir (shortening) of the hair.
            Umrah can be performed throughout the year, although it is disliked
            to carry out the pilgrimage during the days of Hajj, which take
            place between the 9th and 13th of Dhul Hijjah. The rites carried out
            during Umrah also form an integral part of Hajj itself.
          </p>
        </div>
        <iframe
          className="w-[45%] h-[400px]"
          src="https://www.youtube.com/embed/O4jLK4huoek?si=UobE1BgbHGIImIKp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex p-8 justify-between">
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold mb-4">Conditions:</h1>
          <p className="text-xl font-normal mb-2">
            There are a number of conditions that need to be met in order to
            perform Umrah. These conditions are exactly the same as those for
            performing Hajj:
          </p>
          <div className="pl-4">
            <li>You Must Be a Muslim</li>
            <li>you must have reached puberty, i.e. you are Baligh.</li>
            <li>
              you must be mentally sound and in full control of your mental
              faculties
            </li>
            <li>
              you must have sufficient expenses to cover travelling,
              accommodation and all other requirements during the course of your
              Umrah. You must also have sufficient expenses to support your
              dependents during your absence. Being debt-free isn’t a
              prerequisite, although arrangements for debts to be fulfilled
              should be made prior to going on Umrah.
            </li>
            <li>
              you must be physically capable of travelling to Makkah and
              performing the rites of Umrah. You should be free from any
              illnesses or diseases that would restrict you from doing so.
            </li>
            <li>
              you must have access to and can afford transport to travel to
              Makkah in order to perform Umrah. Travelling should also be safe,
              i.e. you shouldn’t be in any danger of being harmed during your
              trip.
            </li>
            <li>females must be accompanied by a Mahram.</li>
            <li>females must be from their Iddah period, if applicable.</li>
          </div>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default UmrahGuide;
