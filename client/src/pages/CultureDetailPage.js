import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../services/MakeBackendRequests";
import Navbar from "../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const CultureDetailPage = () => {
    const location = useLocation();
  const [cultures, setCultures] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCultures = async () => {
      try {
        const currentPath = location.pathname;
        const pathSegments = currentPath.split("/");
        const lastPathSegment = pathSegments
          .filter((segment) => segment !== "")
          .pop();

        const response = await axiosInstance.post(`getCultureDetails`, { id: lastPathSegment });
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
          src={cultures.imgUrl}
          alt=""
          className="h-full w-full object-cover absolute z-10 inset-0"
        />
        <div className="w-full h-full bg-black inset-0 absolute z-20 opacity-50" />
        <div className="absolute z-30 left-1/2 top-1/2 flex flex-col gap-6 items-center justify-center -translate-x-1/2 text-white">
          <h1 className="w-[90%] text-7xl text-center font-medium">
            {cultures.name}
          </h1>
          <h1 className="w-[80%] text-2xl text-center mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h1>
        </div>
      </div>
      <div className="flex p-8 justify-between">
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold mb-4">Introduction:</h1>
          <p className="text-xl font-normal">
            {cultures.description}
          </p>
        </div>
      </div>
      <div className="flex p-8 justify-between">
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold mb-4">History:</h1>
          <p className="text-xl font-normal">
            {cultures.history}
          </p>
        </div>
      </div>
      <div className="flex p-8 justify-between">
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold mb-4">Things to do:</h1>
          <p className="text-xl font-normal mb-2">
            Things you must do in {cultures.name}:
          </p>
          <div className="pl-4">
            {cultures.thingsToDo?.map((thing, index) => {
                return <li>{thing}</li>
            })}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CultureDetailPage
