import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/MakeBackendRequests";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SpotsSection = () => {
  const [spots, setSpots] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const getSpots = async () => {
      try {
        const response = await axiosInstance.get("/getSpots");
        setSpots(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSpots();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-mainDark text-6xl font-medium pb-4 text-center">
          Featured Places
        </h1>
        <div className="h-4 bg-mainGreen w-[280px] mb-8" />
        <p className="text-2xl mb-8">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters.
        </p>
      </div>
      <div className="w-full p-8 flex flex-wrap gap-8 items-center justify-center">
        {spots.map((spots, index) => {
          return (
            <div className=" h-[400px] w-[450px] rounded-2xl overflow-hidden bg-hoverWhite shadow-xl hover:cursor-pointer hover:-translate-y-2 transition-all" onClick={() => navigate(`/spots/${spots._id}`)}>
              <div className="w-full h-1/2">
                <img
                  src={spots.imgUrl}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="py-2 px-4">
                <h1 className="text-2xl font-medium mb-2">{spots.name}</h1>
              </div>
              <div className="flex h-[200px] bg-mainGreen text-white justify-end px-5">
                <div className="flex items-center gap-4 text-xl font-medium">learn More <FaArrowRight size={24}/></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotsSection;
