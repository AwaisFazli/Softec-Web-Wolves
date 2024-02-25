import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../services/MakeBackendRequests";
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
const CulturePage = () => {
  const location = useLocation();
  const [cultures, setCultures] = useState([])
  const navigate = useNavigate()
  const [sponsors, setSponsors] = useState([])

  useEffect(() => {
    const fetchCultures = async () => {
      try {
        const response = await axiosInstance.get("/getSponsors");
        setSponsors(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCultures();
  }, []);

  useEffect(() => {
    const fetchCultures = async () => {
      try {
        const currentPath = location.pathname;
        const pathSegments = currentPath.split("/");
        const lastPathSegment = pathSegments
          .filter((segment) => segment !== "")
          .pop();

        const response = await axiosInstance.post(`getUserCultures`, { id: lastPathSegment });
        console.log(response.data)
        setCultures(response.data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchCultures();
  }, []);
  return (
    <div>
      <div className="h-[80vh] w-full relative">
        <Navbar />
        <img
          src="https://ak.picdn.net/offset/photos/5d31cf98469b183482a1c798/medium/offset_836129.jpg"
          alt=""
          className="h-full w-full object-cover absolute z-10 inset-0"
        />
        <div className="w-full h-full bg-black inset-0 absolute z-20 opacity-50" />
        <div className="absolute z-30 left-1/2 top-1/2 flex flex-col gap-6 items-center justify-center -translate-x-1/2 text-white">
          <h1 className="w-[90%] text-7xl text-center font-medium">
            Our Featured Places
          </h1>
          <h1 className="w-[80%] text-2xl text-center mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center p-8">
        {cultures.map((culture, index) => {
          return (
            <div className=" h-[400px] w-[450px] rounded-2xl overflow-hidden bg-hoverWhite" onClick={() => navigate(`/culture/${culture._id}`)}>
              <div className="w-full h-1/2">
                <img
                  src={culture.imgUrl}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="py-2 px-4">
                <h1 className="text-2xl font-medium mb-2">{culture.name}</h1>
                <p className="w-full h-24 overflow-hidden opacity-75 whitespace-pre-line line-clamp-4">
                  {culture.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-8">
      <h1 className="text-4xl font-medium mb-8">Recomended Services:</h1>
      <div className="flex gap-4 flex-wrap items-center justify-start">
        {sponsors.map((culture, index) => {
          return (
            <div className=" h-[400px] w-[450px] rounded-2xl overflow-hidden bg-hoverWhite">
              <div className="w-full h-[80%]">
                <img
                  src={culture.imageUrl}
                  alt=""
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="py-2 px-4">
                <h1 className="text-2xl font-medium mb-2">{culture.name}</h1>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CulturePage;
